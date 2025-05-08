import { clsx, type ClassValue } from "clsx";
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
  return str.charAt(0).toUpperCase() + str.slice(1);
}
