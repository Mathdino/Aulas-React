import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h4>{dados.nome}</h4>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
