import React from 'react';
import ProdutoDf3 from './ProdutoDf3';
import TituloH1 from '../Titulo';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function Desafio3() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal); //Verifca se o produtoLocal for diferente de null, ele pega o valor do LocalStore e coloca do lado da <h1>Preferência: {produto}</h1>
  }, []); //Ocorre só quando inicia a pag

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto); //Primeiro chave e depois o valor
  }, [produto]); //Dependencia [produto] -> Sempre que o produto for modificado, esta função irá ativar

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <TituloH1 texto="Desafio 3"></TituloH1>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <ProdutoDf3 produto={produto} />
    </div>
  );
}
export default Desafio3;
