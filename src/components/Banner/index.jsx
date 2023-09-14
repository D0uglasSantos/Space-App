import { styled } from "styled-components";

const BannerEstilizado = styled.div`
  background-image: url('/src/assets/images/foto-banner.png');
  background-repeat: no-repeat;
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TitleEstilizado = styled.h1`
  color: #fff;
  font-family: "Ghandi sans", sans-serif;
  font-weight: 100;
  font-size:30px;
  line-height: 48px;
  max-width: 250px;
  padding: 0 5rem;
`;

const Banner = ({texto}) => {
  return (
    <BannerEstilizado >
      <TitleEstilizado>{texto}</TitleEstilizado>
    </BannerEstilizado>
  );
};

export default Banner;
