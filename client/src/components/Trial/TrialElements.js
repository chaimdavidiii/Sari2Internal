import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 24px;
`;

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

export const TDRecipe = styled.td`
  text-align: center;
  border: 1px solid black;
`;

export const TDActions = styled.td`
  text-align: center;
  display: flex;
  align-items: center;
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
