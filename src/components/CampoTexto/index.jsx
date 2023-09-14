import { styled } from "styled-components";
import searchIcon from "/imagens/search.png";

const BarraSearchEstilizada = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 602px;
  height: 56px;
  border: 2px solid #be7dea;
  border-radius: 10px;
  padding: 0.1rem 1rem;
`;

const Input = styled.input`
  width: 602px;
  height: 56px;
  background-color: transparent;
  color: rgba(217, 217, 217, 1);
  font-size: 20px;
  font-family: "Ghandi Sans", sans-serif;
  border:none;
  outline: none;

  &::placeholder {
    color: rgba(217, 217, 217, 1);
    font-size: 20px;
    font-family: "Ghandi Sans", sans-serif;
  }
`;

const SearchIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${searchIcon});
`;

const BarraSearch = () => {
  return (
    <BarraSearchEstilizada>
      <Input placeholder="O que você procura?" />
      <SearchIcon />
    </BarraSearchEstilizada>
  );
};

export default BarraSearch;
