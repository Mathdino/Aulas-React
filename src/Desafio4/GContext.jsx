import React from 'react';

export const GContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }
  return (
    <GContext.Provider value={{ dados, limparDados }}>
      {children}
    </GContext.Provider>
  );
};
