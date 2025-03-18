import React, { use } from 'react';

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    //Ternário
    return local ? local : inicial; //Se local for verdadeiro, retorna ele, caso não seja , retorne inicial
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
