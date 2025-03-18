import React from 'react';
import ProductsContext from './ProdutoContext';
import { GlobalStorage } from './GContext';
import LimparDados from './LimparDados';
import TituloH1 from '../Titulo';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const Desafio4 = () => {
  return (
    <GlobalStorage>
      <TituloH1 texto="Desafio 4"></TituloH1>
      <ProductsContext />
      <LimparDados />
    </GlobalStorage>
  );
};

export default Desafio4;
