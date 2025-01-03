import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState, useEffect } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  margin: 0 auto;
  width: 1440px;
  max-width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
`

const MainContainer = styled.main`
  display: flex;
  gap: 1.5rem;
  box-sizing: border-box;

`
const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
gap: 3.5rem;
`

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoComZoom, setFotoComZoom] = useState(null);


  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    })
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorita: !fotoComZoom.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          filtro={filtro}
          setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage="src/assets/banner.png"
              texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              aoFotoSelecionada={foto => setFotoComZoom(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
              fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoComZoom}
        aoAlternarFavorito={aoAlternarFavorito}
        aoFechar={() => setFotoComZoom(null)}
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
