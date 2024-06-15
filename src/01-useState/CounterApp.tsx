import { useState } from 'react';

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <span>Counter1: {counter1}</span>
      <span>Counter2: {counter2}</span>
      <span>Counter3: {counter3}</span>

      <button onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>+1</button>
    </>
  );
};

export default CounterApp;
