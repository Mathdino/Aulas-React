import React from 'react';

function ModeRestrito() {
  const [contar, setContar] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItens([...itens, 'Item ' + (contar + 1)]);
  }

  return (
    <div>
      <p>Adiciona mais um item na array conforme o click</p>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default ModeRestrito;
