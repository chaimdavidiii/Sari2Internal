import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import {
  Container,
  FormContent,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  Form,
  FormLabel,
  FormButtonAdd,
  FormButtonReset,
  FormButtonBack,
  Text,
  SupLogo,
  Errors,
  FormInputTextArea,
  FormButtonWrap,
} from "./TrialElements";

const Signin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const goback = () => {
    history.push("/recipes");
  };
  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3001/recipes", {
      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
    }).then((response) => {
      if (response.statusText === "OK") {
        goback();
      }
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            Sari<SupLogo>2</SupLogo>
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormH1>Add a new Recipe</FormH1>
              <FormLabel htmlFor='for'>Title</FormLabel>
              <FormInput
                ref={register({
                  required: true,
                  minLength: 4,
                })}
                type='text'
                name='title'
                placeholder='Title..'
              />
              {errors.title && errors.title.type === "required" && (
                <Errors>Title is Required!</Errors>
              )}
              {errors.title && errors.title.type === "minLength" && (
                <Errors>Must be more than 4 characters!</Errors>
              )}

              <FormLabel htmlFor='for'>Description</FormLabel>
              <FormInputTextArea
                rows={4}
                ref={register({
                  required: true,
                  minLength: 5,
                })}
                name='description'
                as='textarea'
                placeholder='Description..'
              ></FormInputTextArea>
              {errors.description && errors.description.type === "required" && (
                <Errors>Description is required!</Errors>
              )}
              {errors.description &&
                errors.description.type === "minLength" && (
                  <Errors>Must be more than 5 characters!</Errors>
                )}

              <FormLabel htmlFor='for'>Ingredients</FormLabel>
              <FormInputTextArea
                rows={4}
                ref={register({
                  required: true,
                  minLength: 5,
                })}
                name='ingredients'
                as='textarea'
                placeholder='Ingredients..'
              ></FormInputTextArea>
              {errors.description && errors.description.type === "required" && (
                <Errors>Ingredients field is required!</Errors>
              )}
              {errors.description &&
                errors.description.type === "minLength" && (
                  <Errors>Must be more than 5 characters!</Errors>
                )}
              <FormButtonWrap>
                <FormButtonAdd type='submit'>Add</FormButtonAdd>
                <FormButtonReset
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </FormButtonReset>
                <FormButtonBack onClick={goback}>Back</FormButtonBack>
              </FormButtonWrap>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
