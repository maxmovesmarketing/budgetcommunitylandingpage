import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes and handle conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
