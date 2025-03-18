import React from 'react';
import TituloH1 from '../Titulo';

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1 (Esta função sempre será recriada)</p>
      <p onClick={func2}>Produto 2 (Esta função será criada 1x)</p>
    </div>
  );
};

const Callback = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <>
      <TituloH1 texto="Use Callback"></TituloH1>
      <div>
        <Produto />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    </>
  );
};

export default Callback;
