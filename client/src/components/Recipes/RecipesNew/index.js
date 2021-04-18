import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import {
  Container,
  FormContent,
  FormH1,
  FormInput,
  LoaderContainer,
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
  FormInputFile,
} from "./RecipesNewElements";

const Signin = () => {
  const [previewSource, setPreviewSource] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const loaderColor = "#ff5500";

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const goback = () => {
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
    try {
      setLoading(true);
      const thedata = await Axios.post("http://localhost:3001/recipes", {
        image: previewSource,
        title: data.title,
        description: data.description,
        ingredients: data.ingredients,
      }).then((response) => {
        if (response.statusText === "OK") {
          console.log("nicesu");
          goback();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          {loading ? (
            <LoaderContainer>
              <PulseLoader color={loaderColor} loading={loading} size={120} />
            </LoaderContainer>
          ) : (
            <>
              <Icon to='/'>Add a new Recipe</Icon>
              <FormContent>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormLabel>Image</FormLabel>
                  <FormInputFile
                    type='file'
                    id='file'
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
                  {errors.description &&
                    errors.description.type === "required" && (
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
                  {errors.description &&
                    errors.description.type === "required" && (
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
            </>
          )}
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
