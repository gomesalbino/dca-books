import logo  from "../../imagens/logo.svg";


import styled from "styled-components";

function Logo() {

 const Logo = styled.div`
    display: flex;
    margin: 40px;
    text-align: center;
    margin-left: 7%;
 
 `
 const LogoImagem = styled.img`
 
    width: 40px;
    height: 40px;
    align-items: center;
 
 `
 const LogoTitulo = styled.p`
 
    margin-left: 15px;
    font-weight: 700;
    font-size: 1.56rem;
    color: #333;
    border-bottom: 4px solid #562786;
    margin:5px 15px;
    align-items: center;
 `

    return (
        <>
            <Logo>
                <LogoImagem src={logo} alt={"Imagem do logo"} />
                <LogoTitulo><strong>DCA-Code</strong> Books</LogoTitulo>
            </Logo>
        </>
    );
}

export default Logo;


