import { useState } from 'react';

const SimpleForm = () => {
  const [form, setform] = useState({
    name: 'Pedro',
    email: 'pedro@pedro.com',
  });

  const { name, email } = form;
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" name="name" id="name" value={name} onChange={onInputChange} />
      <input type="email" name="email" id="email" value={email} onChange={onInputChange} />

      <input type="submit" value="enviar" />
    </form>
  );
};

export default SimpleForm;
