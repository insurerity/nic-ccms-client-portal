import { ApolloClient, gql } from "@apollo/client";
// Define the structure of a log entry
interface LogEntry {
  timestamp: string;
  userId?: string; // Optional, depends on how you get user ID
  actionType: string;
  anonymousId?: string; // For identifying the same browser/client
  details?: Record<string, any>;
  level: 'info' | 'warn' | 'error';
  errorMessage?: string; // Optional
  stackTrace?: string; // Optional
}

// GraphQL Mutation to send logs
const CREATE_LOG_ENTRY_MUTATION = gql`
  mutation CreateLogEntry($objects: [nic_ccms_log_insert_input!] = {}) {
  insert_nic_ccms_log(objects: $objects) {
    returning {
      id
    }
  }
}
`;

// Simple queue to buffer logs
const logQueue: LogEntry[] = [];
let isProcessingQueue = false;
let apolloClient: ApolloClient<any> | null = null;
let currentUserId: string | undefined = undefined; 
let currentAnonymousId: string | undefined = undefined;

// --- Configuration ---
const BATCH_SIZE = 3; // Send logs in batches of 10
const PROCESS_INTERVAL = 5000; // Process queue every 5 seconds if not empty
let processQueueTimeout: NodeJS.Timeout | null = null;
const ANONYMOUS_ID_STORAGE_KEY = 'app_anonymous_logger_id';


// --- Public API ---

/**
 * Initializes the logger with the Apollo Client instance and optionally user ID.
 * This should be called once when your application starts.
 * @param client The Apollo Client instance.
 * @param userId The current user's ID.
 */
export const initLogger = (client: ApolloClient<any>, userId?: string) => {
  apolloClient = client;
  currentUserId = userId;

  // Initialize or retrieve anonymous ID
  if (typeof window !== 'undefined') {
    let storedAnonymousId = localStorage.getItem(ANONYMOUS_ID_STORAGE_KEY);
    if (!storedAnonymousId) {
      storedAnonymousId = crypto.randomUUID(); // Requires browser/env with crypto.randomUUID()
      localStorage.setItem(ANONYMOUS_ID_STORAGE_KEY, storedAnonymousId);
    }
    currentAnonymousId = storedAnonymousId;
  } else {
    // Fallback for environments without window/localStorage (e.g., SSR pre-hydration)
    // This ID won't be persisted server-side unless handled differently.
  }
  // Start processing the queue if there are already logs (e.g., from before init)
  if (logQueue.length > 0) {
    scheduleProcessQueue();
  }
};

/**
 * Updates the user ID associated with subsequent logs.
 * Call this when the user logs in or out.
 * @param userId The new user ID, or undefined if logged out.
 */
export const setLoggerUserId = (userId?: string) => {
  currentUserId = userId;
};


/**
 * Logs an informational message or action.
 * @param actionType A brief description of the action (e.g., "User Login", "Form Submitted").
 * @param details Optional object with additional context.
 */
export const logInfo = (actionType: string, details?: Record<string, any>) => {
  addLogToQueue('info', actionType, details);
};

/**
 * Logs a warning message or action.
 * @param actionType A brief description of the warning (e.g., "Large File Upload Attempt", "Deprecated Feature Used").
 * @param details Optional object with additional context.
 */
export const logWarn = (actionType: string, details?: Record<string, any>) => {
  addLogToQueue('warn', actionType, details);
};

/**
 * Logs an error message or action.
 * @param actionType A brief description of the error context (e.g., "API Error", "Component Render Failed").
 * @param error The error object or message.
 * @param details Optional object with additional context.
 */
export const logError = (actionType: string, error: any, details?: Record<string, any>) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const stackTrace = error instanceof Error ? error.stack : undefined;
  addLogToQueue('error', actionType, { ...details, errorMessage, stackTrace });
};

// --- Internal Functions ---

const addLogToQueue = (
  level: LogEntry['level'],
  actionType: string,
  details?: Record<string, any>
) => {
  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    userId: currentUserId, // Use the current user ID
    anonymousId: currentAnonymousId,
    actionType,
    details,
    level,
  };
  logQueue.push(logEntry);
  scheduleProcessQueue(); // Attempt to schedule processing
};

const scheduleProcessQueue = () => {
  // Only schedule if not already scheduled and not currently processing
  if (!processQueueTimeout && !isProcessingQueue) {
    processQueueTimeout = setTimeout(processQueue, PROCESS_INTERVAL);
  }
};

const processQueue = async () => {
  if (!apolloClient || logQueue.length === 0) {
    isProcessingQueue = false;
    processQueueTimeout = null;
    console.log('Nothing to process');
    return; // Nothing to process or client not initialized
  }

  isProcessingQueue = true;
  clearTimeout(processQueueTimeout!); // Clear the current timeout
  processQueueTimeout = null; // Reset timeout ID

  // Take a batch of logs from the front of the queue
  const logsToSend = logQueue.splice(0, BATCH_SIZE);

  try {
    // Prepare the input for the mutation
    const input = logsToSend.map(log => ({
      timestamp: log.timestamp,
      user_id: log.userId,
      anonymousId: log.anonymousId, // Add anonymousId to the payload
      actionType: log.actionType,
      details: log.details ? JSON.stringify(log.details) : null, // GraphQL expects JSON string for jsonb
      level: log.level,
      errorMessage: log.errorMessage,
      stackTrace: log.stackTrace,
    }));

    // Send the entire batch of logs in one mutation call
    // The CREATE_LOG_ENTRY_MUTATION already supports an array for 'objects'
    await apolloClient.mutate({
      mutation: CREATE_LOG_ENTRY_MUTATION,
      variables: {
        objects: input, // 'input' is an array of log objects
      },
    });

    // If there are more logs in the queue, schedule the next batch
    if (logQueue.length > 0) {
      scheduleProcessQueue();
    }

  } catch (error) {
    console.error("Failed to send log batch via GraphQL:", error);
    // If the whole batch failed (e.g., network error), add logs back to the front of the queue
    logQueue.unshift(...logsToSend);
    // Schedule a retry after a delay
    processQueueTimeout = setTimeout(processQueue, PROCESS_INTERVAL * 2); // Retry after a longer delay
  } finally {
    isProcessingQueue = false;
  }
};

// Optional: Add a listener for beforeunload to send any remaining logs
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    // Attempt to send remaining logs synchronously before the page unloads
    // This is not guaranteed to work, especially on fast navigation
    if (logQueue.length > 0 && apolloClient) {
        // This is a simplified attempt. A more robust solution might use
        // navigator.sendBeacon or keepalive fetch requests.
        // For a simple setup, just trying to process the queue might catch some logs.
        console.log(`Attempting to send ${logQueue.length} logs before unload...`);
        // Note: Awaiting here won't work as the event loop is shutting down.
        // You'd need a synchronous or non-blocking send method.
        // For now, we'll rely on the periodic send.
    }
  });
}