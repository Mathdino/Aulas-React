import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
//NAVLINK adiciona a class active nos links que estão selecionados, podendo personalizar eles no style

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return (
    <nav>
      <h2>Esse é o HEADER</h2>
      <NavLink to="/" end>
        Home
      </NavLink>
      <br />
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  );
};

export default Header;
