import React from 'react';
import TituloH1 from '../Titulo';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar cada checkbox na tela.
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Desafio6 = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <TituloH1 texto="Desafio 6" />
      <form>
        {coresArray.map((cor) => (
          <label key={cor} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
        <ul>
          {cores.map((cor) => (
            <li key={cor}>{cor}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Desafio6;
