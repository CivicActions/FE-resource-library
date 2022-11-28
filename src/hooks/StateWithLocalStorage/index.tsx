import * as React from "react";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";

export default {
  title: "State With Local Storage",
};

type TestComponentProps = {
  key: string;
  initialState: any;
};

export const TestComponent = ({ key, initialState }: TestComponentProps) => {
  const [state, setState] = useStateWithLocalStorage(key, initialState);

  const handleReset = () => {
    window.localStorage.removeItem(key);
    setState(initialState);
  };
  return (
    <>
      <p>State Value: {state}</p>
      <p>Local Storage Value: {window.localStorage.getItem(key)}</p>
      <button onClick={() => setState("modified state")}>Update State</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};
