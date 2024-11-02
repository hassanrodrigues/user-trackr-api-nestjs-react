/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export function getLocalStorage<T>(key: string): T | undefined {
    const storageValue = localStorage.getItem(key);
    
    if (storageValue) {
        return JSON.parse(storageValue);
    }
}

export function setLocalStorage<T>(key: string, value: T) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function localStorageObservable(key: string, value: any, setState: Dispatch<SetStateAction<any>>) {
  return window.addEventListener('storage', (event) => {
    if (event.key === key && event.oldValue === JSON.stringify(value)) {
      setState(true);
    }
  });
}

export function removeLocalStorage(key: string) {
    return localStorage.removeItem(key);
}

