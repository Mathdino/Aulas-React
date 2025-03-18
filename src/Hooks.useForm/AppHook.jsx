import React from 'react';
import InputForm from './InputForm';
import useForm from './useForm';
import TituloH1 from '../Titulo';

const AppHook = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TituloH1 texto="Hook de Validação"></TituloH1>
      <InputForm
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <InputForm label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default AppHook;
