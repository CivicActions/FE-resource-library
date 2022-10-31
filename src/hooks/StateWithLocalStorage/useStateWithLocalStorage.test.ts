import { renderHook, act } from "@testing-library/react";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";

test("should update state and local storage", async () => {
  const { result } = renderHook(() =>
    useStateWithLocalStorage("local-storage-key", "initial value")
  );

  let [state, setState] = result.current;

  expect(state).toBe("initial value");
  expect(window.localStorage.getItem("local-storage-key")).toBe(
    "initial value"
  );

  act(() => {
    setState("updated value");
  });

  [state, setState] = result.current;

  expect(state).toBe("updated value");
  expect(window.localStorage.getItem("local-storage-key")).toBe(
    "updated value"
  );
});
