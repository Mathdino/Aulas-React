import React from 'react';
import Produto from './Produto';
import TituloH1 from '../Titulo';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function Desafio2() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  // Utilizamos async para toda função que retorna uma promise, o fetch retorna , então podemos utilizar nele. E para cada promise nos colocamos um await e colocamos numa const
  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      // este event.target.innerText pega o nome do button
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <TituloH1 texto="Desafio 2"></TituloH1>
      <div
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '20px',
        }}
      >
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
        <button onClick={handleClick}>notebook</button>
      </div>
      {carregando && <p>Carregando ...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
}

export default Desafio2;
