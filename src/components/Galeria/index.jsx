import { styled } from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Imagem from "./Imagem";
import ImagemPopular from "./imagemPopular";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const Populares = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const VerMais = styled.button`
  text-align: center;
  color: #fff;
  background-color: transparent;
  font-family: "Ghandi Sans", sans-serif;
  font-weight: 500;
  border: 2px solid #9974cd;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #9974cd;
  }
`;

const ImagemContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ImagemContainerPopulares = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Galeria = ({
  fotos = [],
  aoFotoSelecionada,
  fotosPopulares = [],
  aoAlternarFavorito,
}) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagemContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagemContainer>
        </SecaoFluida>
        <Populares>
          <Titulo $alinhamento="center">Populares</Titulo>
          <ImagemContainerPopulares>
            {fotosPopulares.map((fotoPopular) => (
              <ImagemPopular key={fotoPopular.id} fotoPopular={fotoPopular} />
            ))}
          </ImagemContainerPopulares>
          <VerMais>
            <p>Ver Mais</p>
          </VerMais>
        </Populares>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
