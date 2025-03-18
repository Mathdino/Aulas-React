import React from 'react';
import TituloH1 from '../Titulo';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const Memo = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return (
    <>
      <TituloH1 texto="Use Memo"></TituloH1>
      <p>
        Serve para operações lentas, tipo contas matemáticas complexas/ busca em
        arrays com milhões de itens
      </p>
      <button onClick={() => setContar(contar + 1)}>{valor}</button>
    </>
  );
};

export default Memo;
