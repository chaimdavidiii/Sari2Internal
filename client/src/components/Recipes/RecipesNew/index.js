import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function NewRecipe() {
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
    <div>
      <h1 className='newRecipe'>Add New Recipe</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className='mx-4'>
        <Form.Group as={Row} controlId='formHorizontalTitle'>
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={register({
                required: true,
                minLength: 4,
              })}
              type='text'
              name='title'
              placeholder='Title..'
            />
            {errors.title && errors.title.type === "required" && (
              <div className='errorsStyle'>Title is required!</div>
            )}
            {errors.title && errors.title.type === "minLength" && (
              <div className='errorsStyle'>Must be more than 5 characters!</div>
            )}
          </Col>
        </Form.Group>

        <Form.Group
          className='lineBR'
          as={Row}
          controlId='formHorizontalDescription'
        >
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={register({
                required: true,
                minLength: 5,
              })}
              name='description'
              as='textarea'
              placeholder='Description..'
            />
            {errors.description && errors.description.type === "required" && (
              <div className='errorsStyle'>Description is required!</div>
            )}
            {errors.description && errors.description.type === "minLength" && (
              <div className='errorsStyle'>Must be more than 5 characters!</div>
            )}
          </Col>
        </Form.Group>
        <Form.Group
          className='lineBR'
          as={Row}
          controlId='formHorizontalIngredients'
        >
          <Form.Label column sm={2}>
            Ingredients
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={register({
                required: true,
                minLength: 5,
              })}
              name='ingredients'
              as='textarea'
              placeholder='Ingredients..'
            />
            {errors.ingredients && errors.ingredients.type === "required" && (
              <div className='errorsStyle'>Ingredients field is required!</div>
            )}
            {errors.ingredients && errors.ingredients.type === "minLength" && (
              <div className='errorsStyle'>Must be more than 5 characters!</div>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='mr-1' type='submit'>
              Add
            </Button>
            <Button
              className='mr-1'
              onClick={() => {
                reset();
              }}
              variant='danger'
            >
              Reset
            </Button>
            <Button onClick={goback} variant='warning'>
              Back
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewRecipe;
