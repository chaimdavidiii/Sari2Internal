import React, { useState, useEffect } from "react";
import {
  Container,
  FormContent,
  FormH1,
  FormInput,
  FormInputFile,
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
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [previewSource, setPreviewSource] = useState("");
  const [image_Id, setImage_Id] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      setRecipe(response.data);
      setImage_Id(response.data.image_Id);
    });
  }, []);

  useEffect(() => window.scrollTo(0, 0));

  const goBack = () => {
    history.push(`recipes/${recipe._id}`);
  };

  const saveEdit = () => {
    history.push("/recipes");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const onSubmit = async (data) => {
    if (!previewSource) {
      await Axios.put("http://localhost:3001/recipes/update", {
        id: id,
        newTitle: data.title,
        newDescription: data.description,
        newIngredients: data.ingredients,
      }).then((response) => {
        if (response.statusText === "OK") {
          saveEdit();
        }
      });
    } else {
      await Axios.put("http://localhost:3001/recipes/update", {
        image: previewSource,
        imageToDelete: image_Id,
        id: id,
        newTitle: data.title,
        newDescription: data.description,
        newIngredients: data.ingredients,
      }).then((response) => {
        if (response.statusText === "OK") {
          saveEdit();
        }
      });
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Edit '{recipe.title}'</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>Image</FormLabel>
              <FormInputFile
                type='file'
                name='image'
                onChange={handleFileInputChange}
              />
              {previewSource && (
                <img
                  src={previewSource}
                  alt='imagePreview'
                  style={{ height: "100px" }}
                />
              )}
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
                <FormButtonBack to={`/recipes/${recipe._id}`}>
                  Back
                </FormButtonBack>
              </FormButtonWrap>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default EditRecipe;
