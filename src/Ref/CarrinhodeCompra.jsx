import React from 'react';

function CarrinhodeCompra() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p
        style={{
          background: '#ccc',
          height: '100px',
          width: '300px',
          padding: '10px',
        }}
      >
        {notificacao}
      </p>
      <button onClick={handleClick}>Adcionar ao carrinho {carrinho}</button>
    </div>
  );
}

export default CarrinhodeCompra;
