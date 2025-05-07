import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NIC_CCMS_CLIENT_PORTAL_TOKEN = "NIC_CCMS_CLIENT_PORTAL_TOKEN";
