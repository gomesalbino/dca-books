
import styled from "styled-components";

function CardRecumenda({ titulo, subtitulo, descricoes, img }: { titulo: string, subtitulo: string, descricoes: string, img: string }) {


    const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

    const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`
    const Titulo = styled.h3`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #000;
    font-size: 36px;
    text-align: center;
    margin: 0;
    
`


    const Descricao = styled.p`
    max-width: 300px;
`

    const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

    const ImgLivro = styled.img`
    width: 150px;
`

    return (
        <>
            <Card>
                <div>
                    <Titulo>{titulo}</Titulo>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricoes}</Descricao>
                </div>
                <div>
                    <ImgLivro src={img} alt="Imagem de livros recumendados!" />
                    <Botao>Saiba mais</Botao>
                </div>
            </Card>
        </>
    );
}

export default CardRecumenda;



