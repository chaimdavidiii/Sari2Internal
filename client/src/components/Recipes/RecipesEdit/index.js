import React, { useState, useEffect } from "react";
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
  Errors,
  FormInputTextArea,
  FormButtonWrap,
} from "./RecipesEditElements";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditRecipe() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  useEffect(() => window.scrollTo(0, 0));

  const goToRecipes = () => {
    history.push("/recipes");
  };

  const onSubmit = async (data) => {
    await Axios.put("http://localhost:3001/recipes/update", {
      id: id,
      newTitle: data.title,
      newDescription: data.description,
      newIngredients: data.ingredients,
    }).then((response) => {
      if (response.statusText === "OK") {
        goToRecipes();
      }
    });
  };
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Edit '{recipe.title}'</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel htmlFor='for'>Title</FormLabel>
              <FormInput
                ref={register({
                  required: true,
                  minLength: 4,
                })}
                type='text'
                name='title'
                placeholder='Title..'
                defaultValue={recipe.title}
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
                defaultValue={recipe.description}
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
                defaultValue={recipe.ingredients}
              ></FormInputTextArea>
              {errors.description && errors.description.type === "required" && (
                <Errors>Ingredients field is required!</Errors>
              )}
              {errors.description &&
                errors.description.type === "minLength" && (
                  <Errors>Must be more than 5 characters!</Errors>
                )}
              <FormButtonWrap>
                <FormButtonAdd type='submit'>Save</FormButtonAdd>
                <FormButtonReset
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </FormButtonReset>
                <FormButtonBack onClick={goBack}>Back</FormButtonBack>
              </FormButtonWrap>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default EditRecipe;
