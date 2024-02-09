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


/**
 * Formats the given price into a currency format according to specified options.
 * @param {number | string} price The price to format. Can be a number or a string representing a number.
 * @param {Object} [options] The formatting options.
 * @param {"USD" | "EUR" | "GBP" | "BDT"} [options.currency="USD"] The currency to use for formatting. Default is USD.
 * @param {Intl.NumberFormatOptions['notation']} [options.notation="compact"] The notation style to use. Default is "compact".
 * @returns {string} The formatted price as a string in the specified currency format.
 */
export function formatPrice(
  price: number | string, 
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT",
    notation?: Intl.NumberFormatOptions['notation']
    } = {}
  ) {
    const {currency = 'USD', notation = 'compact'} = options;

   const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

   return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    notation,
    maximumFractionDigits:2
   }).format(numericPrice)
  }