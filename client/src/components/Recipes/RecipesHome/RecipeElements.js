import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipesContainer = styled.div`
  margin-top: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ModalContainer = styled.div`
  width: 100%;
`;

export const TableHeadRecipe = styled.thead`
  background-color: #ff5500;
  color: white;
`;

export const TDRecipe = styled.td`
  white-space: pre-line;
`;

export const TDActions = styled.td`
  border: 3px solid blue;
  display: flex;
  justify-content: space-around;
`;

export const TDLink = styled(Link)`
  text-decoration: none;
  /* height: 1rem; */
  &:hover {
    text-decoration: none;
  }
`;
