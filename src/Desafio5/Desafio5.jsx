import React from 'react';
import TituloH1 from '../Titulo';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const Desafio5 = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      //'acc' expressão para valor anterior | 'field' valor atual
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TituloH1 texto="Desafio 5"></TituloH1>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={form[id]}
            /*Utilizamos o form[id] para transformar o que tem escrito no 'id' em uma string */
            onChange={handleChange}
          />
        </div>
      ))}
      <button>Enviar</button>

      {response && response.ok && (
        /* 1° - Verifica se response existe | 2° - Se o response for .ok | 3° - Se todas verificações forem true, ele mostra o <p> */
        <p
          style={{
            width: '300px',
            height: '100px',
            background: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: ' var(--color)',
          }}
        >
          Usuário Criado
        </p>
      )}
    </form>
  );
};

export default Desafio5;
