import { styled } from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  font-family: "Ghandi Sans", sans-serif;
  font-weight: 100;
`;

const Tag = styled.button`
  font-size: 18px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.560);
  border: 2px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Ghandi Sans", sans-serif;
  padding: 10px 15px;
  transition: background-color 0.3s ease;

  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
