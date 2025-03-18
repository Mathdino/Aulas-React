import React from 'react';
import TituloH1 from '../Titulo';

const ComponentesForm = () => {
  const [mensagem, setMensagem] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    setRadio(target.value);
    setCheckbox(target.checked);
  }

  function handleCheckBox({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <TituloH1 texto="Componentes Formulário" />
      <h1>Textarea</h1>
      <form>
        <textarea
          id="mensagem"
          value={mensagem}
          rows={5}
          onChange={({ target }) => setMensagem(target.value)}
        />
        <p>{mensagem}</p>
        <h1>Select</h1>
        <select
          style={{
            width: '300px',
            height: '80px',
            fontSize: '1.5rem',
          }}
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecione um produto
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>{select}</p>
        <h1>Radio</h1>
        <label style={{ fontSize: '1.5rem' }}>
          <input
            type="radio"
            value="notebook"
            checked={radio === 'notebook'}
            onChange={handleChange}
          />
          Notebook
        </label>
        <label style={{ fontSize: '1.5rem' }}>
          <input
            type="radio"
            value="smartphone"
            checked={radio === 'smartphone'}
            onChange={handleChange}
          />
          Smartphone
        </label>
        <label style={{ fontSize: '1.5rem' }}>
          <input
            type="radio"
            value="tablet"
            checked={radio === 'tablet'}
            onChange={handleChange}
          />
          Tablet
        </label>
        <h1>CheckBox</h1>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
          />
          Li os termos.
        </label>
        <h1>Outro exemplos de CheckBox</h1>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={handleChecked('azul')}
            onChange={handleCheckBox}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={handleChecked('vermelho')}
            onChange={handleCheckBox}
          />
          Vermelho
        </label>
        <label>
          <input
            type="checkbox"
            value="verde"
            checked={handleChecked('verde')}
            onChange={handleCheckBox}
          />
          Verde
        </label>
        <label>
          <input
            type="checkbox"
            value="amarelo"
            checked={handleChecked('amarelo')}
            onChange={handleCheckBox}
          />
          Amarelo
        </label>
        <label>
          <input
            type="checkbox"
            value="roxo"
            checked={handleChecked('roxo')}
            onChange={handleCheckBox}
          />
          Roxo
        </label>
        <ul>
          {cores.map((cor) => (
            <li key={cor}>{cor}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default ComponentesForm;
