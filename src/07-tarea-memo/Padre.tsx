import { useCallback, useState } from 'react';
import { Hijo } from './Hijo';

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const incrementar = (num: number) => {
  //     setValor(valor + num);
  //   };

  const incrementar = useCallback((num: number) => {
    setValor((prevValue) => prevValue + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
