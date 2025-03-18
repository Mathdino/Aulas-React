import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Desafio1 from './Desafio1/Desafio1';
import UseStates from './UseStates/UseStates';
import ModeRestrito from './UseStates/ModeRestrito';
import Desafio2 from './Desafio2/Desafio2';
import Effect from './Effect/Effect';
import Desafio3 from './Desafio3/Desafio3';
import Ref from './Ref/Ref';
import Memo from './Memo/Memo';
import Callback from './Callback/Callback';
import Context from './USeContext/Context';
import Desafio4 from './Desafio4/Desafio4';
import Hooks from './CustomHooks/Hooks';
import TituloDf1 from './Desafio1/TituloDf1';
import TituloH1 from './Titulo';
import Input from './Form/Input';
import InputModule from './Input/InputModule';
import Desafio5 from './Desafio5/Desafio5';
import ComponentesForm from './ComponentesForm/ComponentesForm';
import Desafio6 from './Desafio6/Desafio6';
import AppHook from './Hooks.useForm/AppHook';
import Desafio7 from './Desafio7/Desafio7';

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      {/* Utilizamos o React.Fragment para não ficar rederizando divs e deixar a
      aplicação lenta . A maneira mais comum é utilizar a forma : '<> </>' sem
      nada escrito */}
      <TituloH1 texto="REACT" />
      <Header />
      <Footer />
      <Form />
      <Desafio1 />
      <UseStates />
      <ModeRestrito />
      <Desafio2 />
      <Effect />
      <Desafio3 />
      <Ref />
      <Memo />
      <Callback />
      <Context />
      <Desafio4 />
      <Hooks />
      <InputModule />
      <Desafio5 />
      <ComponentesForm />
      <Desafio6 />
      <AppHook />
      <Desafio7 />
    </>
  );
};

export default App;
