import { ultimosLancamentos } from "./UltimosLancamentos";
import styled from 'styled-components';

import { Titulo } from "../Titulo";
import CardRecumenda from "../CardRecumenda";

import imagemFoto from "../../imagens/livro2.png";


function UltimosLancamentos() {

    const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

    const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

    return (
        <UltimosLancamentosContainer>
            <Titulo>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {ultimosLancamentos.map(ultimoLancado => (
                    <img src={ultimoLancado.src} />
                ))}
            </NovosLivrosContainer>


            <CardRecumenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular v1"
                descricoes="Construindo uma aplicação integrada com a plataforma Google."
                img={imagemFoto}
              />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;



