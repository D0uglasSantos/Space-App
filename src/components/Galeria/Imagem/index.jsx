import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
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
    padding: 1rem;
  }
`;

const DivFavExpand = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Title = styled.h4`
  font-family: "Ghandi Sans", sans-serif;
  margin: 0;
`;

const Path = styled.p`
  font-family: "Ghandi Sans", sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 0;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

  const iconeFavorito = foto.favorita ? '/icones/favorite_outline.png' : '/icones/favorite.png'

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <Title>{foto.titulo}</Title>
        <Footer>
          <Path>{foto.path}</Path>
          <DivFavExpand>
            <Button onClick={() => aoAlternarFavorito(foto)}>
              <img src={iconeFavorito} alt="Icone de favorito" />
            </Button>
            {!expandida && (
              <Button
                aria-hidden={expandida}
                onClick={() => aoZoomSolicitado(foto)}
              >
                <img src="/icones/open_in_full.png" alt="Icone de expandi" />
              </Button>
            )}
          </DivFavExpand>
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
