import { useEffect, useState } from "react";

const useLocalState = (key, initialValue) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setState(item ? JSON.parse(item) : initialValue);
    } catch {}
  }, []);
  return [
    state,
    (value) => {
      setState(value);
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    },
  ];
};

export default useLocalState;
