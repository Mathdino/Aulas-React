import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div
        style={{
          background: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          justifyContent: 'space-between',
        }}
      >
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  return null;
};

export default Modal;
