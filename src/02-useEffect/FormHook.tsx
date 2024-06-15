import { useForm } from '../hooks/useForm';
interface FormData {
  name: string;
  email: string;
  age: number;
}

const FormHook = () => {
  const { formState, onInputChange, onResetForm } = useForm<FormData>({
    name: 'pedro',
    email: 'pedro@pedro.com',
    age: 22,
  });
  const { name, email, age } = formState;

  return (
    <form>
      <input type="text" name="name" id="name" value={name} onChange={onInputChange} />
      <input type="email" name="email" id="email" value={email} onChange={onInputChange} />
      <input type="age" name="age" id="age" value={age} onChange={onInputChange} />

      <button onClick={onResetForm} type="button">
        Reset Form
      </button>
    </form>
  );
};

export default FormHook;
