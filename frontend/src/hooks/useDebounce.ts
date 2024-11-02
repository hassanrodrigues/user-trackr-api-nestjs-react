/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef(0);

  function debounceFn(...params: any) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...params);
    }, delay);
  }

  return debounceFn;
}
