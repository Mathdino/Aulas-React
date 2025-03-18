import React from 'react';
import CarrinhodeCompra from './CarrinhodeCompra';
import TituloH1 from '../Titulo';

function Ref() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <>
      <TituloH1 texto="Use ref"></TituloH1>
      <div>
        <ul>
          {comentarios.map((comentar) => (
            <li key={comentar}>{comentar}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
      <br />
      <br />
      <CarrinhodeCompra />
    </>
  );
}

export default Ref;
