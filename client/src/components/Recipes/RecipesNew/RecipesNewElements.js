import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  /* background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%); */
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0; */
  overflow: hidden;
  background: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
`;

export const LoaderContainer = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 300px;
  margin-bottom: 400px;
`;

export const Errors = styled.div`
  color: #ff0000;
  margin-bottom: 16px;
  text-align: center;
`;

export const SupLogo = styled.sup`
  font-size: 1rem;
  margin-left: 3px;
  top: 2;
`;

export const FormWrap = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled.h1`
  align-self: center;
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  text-decoration: none;
  color: #ff5500;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 100px; */

  @media screen and (max-width: 480px) {
    padding: 10px;
    /* margin-bottom: 200px; */
  }
`;

export const Form = styled.form`
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin-top: 0;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8x;
  font-size: 14px;
  color: #000000;
`;

export const FormInputFile = styled.input`
  color: rgba(0, 0, 0, 0);
  padding: 16px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
`;
export const FormInputTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
`;

export const FormButtonWrap = styled.div`
  display: flex;
  column-gap: 4px;
  height: 50px;
  justify-content: space-between;
`;

export const FormButtonAdd = styled.button`
  background: #0000ff;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const FormButtonReset = styled.button`
  background: #ff0000;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const FormButtonBack = styled.button`
  background: #ff5500;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
