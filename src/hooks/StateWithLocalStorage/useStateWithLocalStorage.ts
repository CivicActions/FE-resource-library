import { useState } from "react";

export const useStateWithLocalStorage = (key: string, init?: any) => {
  const storedValue = <any>window.localStorage.getItem(key);

  if (storedValue === null && init) {
    window.localStorage.setItem(key, init);
  }

  const [state, setState] = useState(storedValue ?? init ?? null);

  const setLocalStorageState = (value: any) => {
    window.localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setLocalStorageState];
};
