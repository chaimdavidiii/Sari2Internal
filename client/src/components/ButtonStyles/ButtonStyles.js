import styled from "styled-components";

export const LoginButton = styled.button`
  border-radius: 50px;
  background: #ff5500;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #000;
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;
