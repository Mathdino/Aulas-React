import React from 'react';
import HeaderDesafio1 from './HeaderDf1';
import HomeDf1 from './HomeDf1';
import ProdutosDf1 from './Produtos';
import TituloH1 from '../Titulo';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

function Desafio1() {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === '/produtos') {
    Pagina = ProdutosDf1;
  } else {
    Pagina = HomeDf1;
  }

  return (
    <>
      <TituloH1 texto="Desafio 1"></TituloH1>
      <HeaderDesafio1 />
      <Pagina />
    </>
  );
}

export default Desafio1;
