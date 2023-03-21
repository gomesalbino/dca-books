
import styled from "styled-components";

function OpcoesHeader() {


const OpcaoHeader = styled.div`
    display: flex;

`
const OpcaoUl = styled.ul`

    display: flex;
    margin: 50px;
    list-style: none;

`
const OpcaoLi = styled.li`

    text-decoration: none;
    color: #002F52;
    font-size: 17px;
    margin-left: 20px;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const OpcaoLinkA = styled.a`

    color: #444;
    text-decoration: none;



    
    
`

    const listaCabcalho =
        ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];
    return (
        <>
            <OpcaoHeader>
                <OpcaoUl>
                    {listaCabcalho.map((listaMenu, index) => <OpcaoLi key={index}>
                        <OpcaoLinkA href="#">{listaMenu}</OpcaoLinkA></OpcaoLi>)}
                </OpcaoUl>
            </OpcaoHeader>
        </>
    );
}

export default OpcoesHeader;



