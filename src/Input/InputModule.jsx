import React from 'react';
import TituloH1 from '../Titulo';

const InputModule = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TituloH1 texto="input"></TituloH1>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default InputModule;
