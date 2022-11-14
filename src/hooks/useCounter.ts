import { useState } from "react";

export default function useCounter(initialState = 10) {
  const [state,setState] = useState(initialState);
  const increment = (factor = 1) => {
    setState(state + factor);
  }

  const decrement = (factor = 1) => {
    setState(state - factor );
  }

  const reset = (factor = 1) => {
    setState(initialState );
  }

  return {
    state,
    increment,
    decrement,
    reset,
  }
}