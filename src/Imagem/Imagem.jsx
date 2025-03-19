import React from 'react';
import './App.css';
import foto from '../img/foto.jpg';
import dog from '../img/dog.svg';

import TituloH1 from '../Titulo';

const Imagem = () => {
  return (
    <div>
      <TituloH1 texto="imagem"></TituloH1>
      <img src={dog} alt="" />
      <p className="fundo"></p>
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default Imagem;
