import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


/**
 * Allows combining Tailwind CSS classes and custom CSS classes conditionally.
 * 
 * @param {...ClassValue} inputs - The Tailwind CSS classes and custom CSS classes to combine.
 * @returns {string} - A string representing the combined CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
