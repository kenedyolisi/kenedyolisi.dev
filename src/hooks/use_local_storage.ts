import { useSyncExternalStore } from "react";

export default function useLocalStorage(item: string) {
  const subscribe = (callback: { (this: Window, ev: StorageEvent): any; (this: Window, ev: StorageEvent): any; }) => {
    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener("storage", callback);
    };
  };

  const getSnapshot = () => {
    return localStorage.getItem(item);
  };

  return useSyncExternalStore(subscribe, getSnapshot);
}
