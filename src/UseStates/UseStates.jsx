import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';
import TituloH1 from '../Titulo';

function UseStates() {
  const ativo = true;
  const ativo2 = false;

  const [ativar, setAtivar] = React.useState(true);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  const [modal, setModal] = React.useState(false);

  return (
    <>
      <TituloH1 texto="Use states"></TituloH1>
      <button style={{ margin: '1rem' }}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <button>{ativo2 ? 'Ativo' : 'Inativo'}</button>
      <div>
        <p>
          Botão utilizando o Use States
          <button style={{ margin: '1rem' }} onClick={() => setAtivar(!ativar)}>
            {ativar ? 'Botão Ativo' : 'Botão Inativo'}
          </button>
        </p>
      </div>
      <div>
        <p>Abrir Modal</p>
        <div>
          <Modal modal={modal} setModal={setModal} />
          <ButtonModal setModal={setModal} />
        </div>
      </div>
    </>
  );
}

export default UseStates;
