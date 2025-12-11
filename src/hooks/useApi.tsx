// hooks/useApi.ts
import { useState, useEffect, useCallback } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiError {
  message: string;
  status?: number;
}


export function useOffices() {
  const [data, setData] = useState<{name:string, id:string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchOffices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/offices`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      const apiError = {
        message: err instanceof Error ? err.message : 'Failed to fetch offices',
        status: err instanceof Error ? undefined : 500
      };
      setError(apiError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOffices();
  }, [fetchOffices]);

  return {
    data,
    loading,
    error
  }
}

export function useEntities() {
  const [data, setData] = useState<{name:string, id:string}[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchEntities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/entities`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      const apiError = {
        message: err instanceof Error ? err.message : 'Failed to fetch entities',
        status: err instanceof Error ? undefined : 500
      };
      setError(apiError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntities();
  }, [fetchEntities]);

  return {
    data,
    error,
    loading
  }
}




export function useTicketStatus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const submitTicketStatus = useCallback(async (ticketNumber: string, recaptureToken: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/ticket_status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ticketNumber,
          recaptureToken
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
     
      return result;
    } catch (err) {
      const apiError = {
        message: err instanceof Error ? err.message : 'Failed to submit ticket status',
        status: err instanceof Error ? undefined : 500
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    submitTicketStatus,
    loading,
    error,
    
  }
}
