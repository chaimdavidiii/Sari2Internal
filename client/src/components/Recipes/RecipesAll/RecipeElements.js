import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const RecipeContainer = styled.div`
  margin-top: 80px;
  height: 100%;
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

export const RecipeButtonAdd = styled(Button)`
  background-color: #808000;
`;

export const RecipeWrapper = styled.div`
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RecipeCard = styled.div`
  margin-bottom: 20px;
  overflow: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 700px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const RecipeIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 10px;
`;

export const RecipeH1 = styled.h1`
  font-size: 2.5rem;
  color: #ff5500;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const RecipeTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const RecipeP = styled.p`
  font-size: 1rem;
  text-align: center;
  white-space: pre-line;
`;

export const RecipeActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecipeLinkView = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  /* background: #0000ff; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: #0000ff;
    text-decoration: none;
  }
`;
export const RecipeLinkEdit = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  /* background: #004000; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: #eaea00;
    text-decoration: none;
  }
`;
export const RecipeLinkDelete = styled(Link)`
  text-decoration: none;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 50px;
  /* background: #ea0000; */
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    color: #ea0000;
    text-decoration: none;
  }
`;
