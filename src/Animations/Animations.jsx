import React from 'react';
import './Animation.css';
import TituloH1 from '../Titulo';
import ProdutoAnimation from './ProdutoAnimation';

const Animations = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <TituloH1 texto="Animations"></TituloH1>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <ProdutoAnimation />}
    </div>
  );
};

export default Animations;
