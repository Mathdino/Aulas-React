import React from 'react';
import TituloH1 from '../Titulo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Contato from './Contato';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Home from './Home';
import Pagina404 from './Pagina404';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const router = () => {
  return (
    <div>
      <TituloH1 texto="Router"></TituloH1>
      <p>
        Instale o Router com NPM : <b>npm i react-router-dom</b>
      </p>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Produto />}>
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default router;
