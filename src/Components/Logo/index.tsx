import logo from "../../imagens/logo.svg";


import styled from "styled-components";

function Logo() {

    const Logo = styled.div`
    display: flex;
    margin: 50px;
    text-align: center;
    margin-left: 7%;
    justify-content: center;
 
 `
    const LogoImagem = styled.img`
    display: flex;
    width: 120px;
    align-items: center;
    margin-top: 0;
    
    
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


