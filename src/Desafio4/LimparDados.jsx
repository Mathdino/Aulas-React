import React from 'react';
import { GContext } from './GContext';

const LimparDados = () => {
  const { limparDados } = React.useContext(GContext);

  return <button onClick={limparDados}>Limpar</button>;
};

export default LimparDados;
