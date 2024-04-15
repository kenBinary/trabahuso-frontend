import { useEffect, useReducer, useState } from "react";
type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_FAIL" }
  | { type: "FETCH_SUCCESS"; data: T };

interface FetchState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

function fetchDataReducer<T>(
  state: FetchState<T>,
  action: Action<T>
): FetchState<T> {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_FAIL":
      return { ...state, isLoading: false, isError: true };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, isError: false, data: action.data };
    default:
      return { ...state };
  }
}

export default function useFetchOnMount<T>(
  initialUrl: string,
  initialData: T
): [FetchState<T>, (newUrl: string) => void] {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(fetchDataReducer<T>, {
    isLoading: true,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await fetch(url, {
          method: "GET",
        });

        if (!response.ok) {
          dispatch({ type: "FETCH_FAIL" });
        }

        const data = await response.json();
        if (!didCancel && response.ok) {
          dispatch({ type: "FETCH_SUCCESS", data: data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAIL" });
        }
      }
    }
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
}
