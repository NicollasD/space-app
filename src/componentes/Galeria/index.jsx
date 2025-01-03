import styled from "styled-components";
import Titulo from "../Titulo"
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 1.5rem;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
`

const Galeria = ({ fotos = [], setTag,aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;