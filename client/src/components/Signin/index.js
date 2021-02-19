import React from "react";
import {
  Container,
  FormContent,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  Form,
  FormLabel,
  FormButton,
  Text,
  SupLogo,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            Sari<SupLogo>2</SupLogo>
          </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'></FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
