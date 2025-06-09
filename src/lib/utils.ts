import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NIC_CCMS_CLIENT_PORTAL_TOKEN = "NIC_CCMS_CLIENT_PORTAL_TOKEN";

/**
 * Capitalizes the first letter of a string.
 *
 * @param str The input string.
 * @returns A new string with the first letter capitalized, or an empty string if the input is null or empty.
 */
export function capitalize(str: string | null | undefined): string {
  if (!str) {
    return "";
  }
  return str
    .toLowerCase()
    .split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function toCamelCase(input: string): string {
  return input.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

export function camelCaseToTitle(input: string): string {
  return input
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
}

export const getLatestStatus = (statuses: any[]) => {
  if (!statuses) return "Submitted";
  const latestStatus = statuses?.reduce((latest, status) => {
    return new Date(status?.created_at) > new Date(latest?.created_at)
      ? status
      : latest;
  }, statuses[0]);

  return latestStatus?.status as string;
};
export const getLatestStatusCreatedAt = (statuses: any[]) => {
  if (!statuses) return "Submitted";
  if(statuses.length === 0) return "Not available"
   const latestStatus = statuses?.reduce((latest, status) => {
    return new Date(status?.created_at) > new Date(latest?.created_at)
      ? status
      : latest;
  }, statuses[0]);

  return format(new Date(latestStatus?.created_at), "dd MMM yyyy");
};

export const getAssignee = (assignees: any[]) => {
  if (!assignees) return "Unassigned";
  const activeAssignee = assignees.filter((v) => v.isActive);

  return activeAssignee[0]?.AssignedTo?.name as string;
};

