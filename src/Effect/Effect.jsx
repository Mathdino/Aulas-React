import React from 'react';
import ProductsEffect from './ProductsEffect';
import TituloH1 from '../Titulo';

function Effect() {
  const [contar, setContar] = React.useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      <TituloH1 texto="Use Effect"></TituloH1>
      <p>Veja no console</p>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <div></div>
      {ativo && <ProductsEffect />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  );
}

export default Effect;
