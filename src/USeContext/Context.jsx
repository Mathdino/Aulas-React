import React from 'react';
import ProductsContext from './ProductsContext';
import { GlobalStorage } from './GlobalContext';
import TituloH1 from '../Titulo';

const Context = () => {
  return (
    <GlobalStorage>
      <TituloH1 texto="Use Context"></TituloH1>
      <ProductsContext />
    </GlobalStorage>
  );
};

export default Context;
