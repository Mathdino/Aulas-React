import React from 'react';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const Form = () => {
  //Input
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  //Select
  const [produto, setProduto] = React.useState('');
  //Radio
  const [cor, setCor] = React.useState('');
  //CheckBox
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  //Validação do cep
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function hanldeSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviar');
    } else {
      console.log('Não Enviar');
    }
  }

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={hanldeSubmit}>
      <h1>Input</h1>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
        //required
      />
      <Input
        label="Email"
        id="email"
        type="text"
        value={email}
        setValue={setEmail}
      />
      <Button />
      <h1>Select</h1>
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <h1>Radio</h1>
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
      <h1>Checkbox</h1>
      <Checkbox
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />
      <Checkbox
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
      <h1>Validação</h1>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
