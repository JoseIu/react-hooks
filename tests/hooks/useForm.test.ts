import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { useForm } from '../../src/hooks/useForm';
interface FormValues {
  name: string;
  email: string;
}

describe('Prueba useForm', () => {
  const initalForm: FormValues = {
    name: 'jose',
    email: 'jose@jose.com',
  };
  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm<FormValues>(initalForm));

    expect(result.current).toEqual({
      formState: initalForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const newValueName = 'Pedro';
    const { result } = renderHook(() => useForm<FormValues>(initalForm));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValueName,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.name).toBe(newValueName);
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const newValueName = 'Pedro';
    const { result } = renderHook(() => useForm<FormValues>(initalForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValueName } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.name).toBe(newValueName);

    act(() => {
      onResetForm();
    });

    expect(result.current.formState).toEqual(initalForm);
  });
});
