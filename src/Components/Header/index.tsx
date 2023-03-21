import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";


import styled from "styled-components";

const HeaderComponentes = styled.header`
    background: #FFF;
    display: flex;
    justify-content: center;
    max-height: 150px;

`

function Cabecalho() {
    return (
        <>
            <HeaderComponentes>
                <Logo />
                <OpcoesHeader />
                <IconesHeader />
            </HeaderComponentes>
        </>
    );
}

export default Cabecalho;