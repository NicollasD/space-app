import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '448px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 1rem 1.25rem;
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 1.125rem;
        }
        p {
            flex-grow: 1;
            margin: 0;
            font-size: 16px;
            font-weight: 400;
            font-family: 'GandhiSansRegular';
        }
        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";
    
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <div>
                    <p>{foto.fonte}</p>
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </BotaoIcone>
                    {!expandida && <BotaoIcone
                        aria-hidden={expandida}
                        onClick={() => aoZoomSolicitado(foto)}>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </BotaoIcone>}
                </div>
            </figcaption>
        </Figure>
    )
}

export default Imagem;