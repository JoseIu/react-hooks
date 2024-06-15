import { useState } from 'react';

export const useCounter = (initalVal: number = 10) => {
  const [counter, setCounter] = useState(initalVal);

  const increment = (value: number) => setCounter(counter + value);
  const decrement = (value: number) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };
  const reset = () => setCounter(initalVal);

  return { counter, increment, decrement, reset };
};
