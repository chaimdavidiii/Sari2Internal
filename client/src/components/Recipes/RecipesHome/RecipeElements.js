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

export const SpanModal = styled.span`
  color: red;
`;

// export const TableContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 24px 24px;
// `;

export const TableRecipe = styled.table`
  border: 1px solid black;
  margin: 12px 12px;
`;

export const THeadRecipe = styled.thead`
  background-color: #ff5500;
  color: white;
  justify-content: center;
`;

export const THRecipe = styled.th`
  text-align: center;
  font-size: 1.1.rem;
  border: 1px solid black;
`;
export const THRecipeNum = styled.th`
  width: 40px;
  text-align: center;
  font-size: 1.1.rem;
  border: 1px solid black;
`;

export const TDRecipe = styled.td`
  white-space: pre-line;
  text-align: center;
  border: 1px solid black;
`;

export const TRRecipe = styled.tr`
  border: 1px solid black;
  height: 46px;
`;

export const TDActions = styled.td`
  justify-content: center;
`;

export const TDLinkView = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  background: #00b000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
export const TDLinkEdit = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  background: #e6e600;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
export const TDLinkDelete = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  background: #ea0000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
