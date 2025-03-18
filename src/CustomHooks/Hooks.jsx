import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';
import TituloH1 from '../Titulo';

const Hooks = () => {
  const [produto, setProduto] = useLocalStorage('app', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response);
      console.log(json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando ...</p>;
  if (data)
    return (
      <>
        <TituloH1 texto="Hooks"></TituloH1>
        <h1>Use Local Storage</h1>
        <button onClick={handleClick}>TV</button>
        <button onClick={handleClick}>PS5</button>
        <h1>Use Fetch</h1>
        {data.map((products) => (
          <div key={products.id}>
            <h5>{products.preco}</h5>
          </div>
        ))}
      </>
    );
  else return null;
};

export default Hooks;
