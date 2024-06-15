import { useState } from 'react';

export const useForm = <T>(initialValue: T) => {
  const [formState, setformState] = useState<T>(initialValue);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setformState(initialValue);
  return { formState, onInputChange, onResetForm };
};
