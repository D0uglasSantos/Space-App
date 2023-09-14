import styled from "styled-components";

const FooterEstilizado = styled.section`
  background-color: rgba(4, 36, 79, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 5rem;
`;

const SocialIcons = styled.div`
  cursor: pointer;
  display: flex;
  gap: 2rem;
`;

const Creditos = styled.p`
  color: white;
  font-family: "Ghandi Sans", sans-serif;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <SocialIcons>
        <img src="/icones/facebook.svg" alt="icon facebook" />
        <img src="/icones/instagram.svg" alt="icon Instagram" />
        <img src="/icones/twitter.svg" alt="icon Twitter" />
      </SocialIcons>
      <Creditos>Desenvolvido por Douglas Santos</Creditos>
    </FooterEstilizado>
  );
};

export default Footer;
