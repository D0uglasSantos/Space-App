import { styled } from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 18px;
  font-family: "Ghandi sans", sans-serif;
  line-height: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
