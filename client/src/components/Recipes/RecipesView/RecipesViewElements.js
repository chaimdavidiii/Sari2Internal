import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const RecipeContainer = styled.div`
  margin-top: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9d29d;
  background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);

  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
`;

export const SpanModal = styled.span`
  color: #ff0000;
`;

export const RecipeModalButton = styled(Button)`
  background-color: #808000;
`;

export const RecipeCard = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background: #ffffff;
`;

export const RecipeBody = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecipeImage = styled.div`
  height: 400px;
  width: 500px;
`;

export const RecipeTitle = styled.h1`
  align-self: center;
  font-size: 2.5rem;
`;

export const RecipeTextArea = styled.p`
  white-space: pre-line;
`;

export const RecipeButtonContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
`;

export const RecipeButtonBack = styled(Link)`
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #0000ff;
  }
`;

export const RecipeButtonEdit = styled(Link)`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #400040;
  }
`;

export const RecipeButtonDelete = styled.span`
  color: #000000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #ff0000;
  }
`;
