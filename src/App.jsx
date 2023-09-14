import { styled } from "styled-components";
import { useState } from "react";

import EstilosGlobais from "./components/EstilosGlobais";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModaZoom";

import fotos from "./fotos.json";
import fotosPopulares from "./fotosPopulares.json";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2rem;
`;

const App = () => {
  const [fotosDaGaleria, SetFotosDaGaleria] = useState(fotos);
  const [fotosGaleriaPopular, setfotosGaleriaPopular] =
    useState(fotosPopulares);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    SetFotosDaGaleria(
      fotosDaGaleria.map((fotosDaGaleria) => {
        return {
          ...fotosDaGaleria,
          favorita:
            fotosDaGaleria.id === foto.id
              ? !foto.favorita
              : fotosDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
              aoAlternarFavorito={aoAlternarFavorito}
              fotosPopulares={fotosGaleriaPopular}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
