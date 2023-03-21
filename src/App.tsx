

import Cabecalho from './Components/Header';

import styled from "styled-components";
import Pesquisar from './Components/Pesquisa';
import UltimosLancamentos from './Components/UltimosLançamentos';


const AppComponentes = styled.div`

    height: 100vh;
    width: 100%;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

function App() {
  return (
    <AppComponentes>
      <Cabecalho />
      <Pesquisar />
      <UltimosLancamentos />
    </AppComponentes>
  );
}

export default App;
