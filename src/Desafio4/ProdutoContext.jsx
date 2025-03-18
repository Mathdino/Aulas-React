import React from 'react';
import { GContext } from './GContext';

const ProdutoContext = () => {
  const global = React.useContext(GContext);
  if (global.dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default ProdutoContext;
