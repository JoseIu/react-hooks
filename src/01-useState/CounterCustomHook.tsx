import { useCounter } from '../hooks/useCounter';

const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <span>Counter with Hook: {counter}</span>

      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => decrement(2)}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterCustomHook;
