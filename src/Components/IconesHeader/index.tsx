
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

import styled from "styled-components";
function IconesHeader() {

    const HeadeerNav = styled.div`
    
    `

    const IconesHeader = styled.ul`
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
    
    `
    const HeaderLi =styled.li`
        list-style: none;
        margin: 0 14px ;
    `
    const HeaderLinkA = styled.a`
    
    `
    const HeaderImagem = styled.img`
        margin: 30px 0;
        align-items: center;
        


    `

    const icones = [perfil, sacola]

    return (
        <>
            <HeadeerNav>
                <IconesHeader>
                    {icones.map((icone, index) => (<HeaderLi key={index}>
                        <HeaderLinkA href="#"><HeaderImagem src={icone} alt="Icone do menu" />
                        </HeaderLinkA ></HeaderLi>))}
                </IconesHeader>
            </HeadeerNav>
        </>
    );
}

export default IconesHeader;


