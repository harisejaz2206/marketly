import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

/**
 * Custom hook to detect clicks outside of a specified DOM element.
 * 
 * @template T - The type of the DOM element to be used as a reference.
 * @param {RefObject<T>} ref - The reference to the DOM element.
 * @param {(event: Event) => void} handler - The function to be called when a click outside the element is detected.
 * @returns {void}
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};