import styled from "styled-components";

const Figure = styled.figure`
  width: 212px;
  height: 158px;
  margin: 0;
  border-radius: 10px;
  & > img {
    max-width: 100%;
    border-radius: 1rem;
  }
`;

const ImagemPopular = ({ fotoPopular }) => {
  return (
    <Figure id={`fotoPopular-${fotoPopular.id}`}>
      <img src={fotoPopular.path} alt={fotoPopular.titulo} />
    </Figure>
  );
};

export default ImagemPopular;
