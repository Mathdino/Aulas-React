import React from 'react';

const TituloH1 = ({ texto }) => {
  return (
    <div
      style={{
        height: '80px',
        margin: '0',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#20B2AA',
        color: 'white',
        fontSize: '2rem',
        marginTop: '40px',
        marginBottom: '20px',
        textTransform: 'uppercase',
      }}
    >
      <h1>{texto}</h1>
    </div>
  );
};

export default TituloH1;
