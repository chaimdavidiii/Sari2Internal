import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <div>
      <h1 className='editRecipe'>Edit Recipe for '{recipe.title}'</h1>
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
              defaultValue={recipe.title}
            />
            {errors.title && errors.title.type === "required" && (
              <div className='errorsStyle'>Title is required!</div>
            )}
            {errors.title && errors.title.type === "minLength" && (
              <div className='errorsStyle'>Must be more than 5 characters!</div>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalDescription'>
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={register({
                required: true,
                minLength: 15,
              })}
              name='description'
              as='textarea'
              defaultValue={recipe.description}
            />
            {errors.description && errors.description.type === "required" && (
              <div className='errorsStyle'>Description is required!</div>
            )}
            {errors.description && errors.description.type === "minLength" && (
              <div className='errorsStyle'>Must be more than 5 characters!</div>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalIngredients'>
          <Form.Label column sm={2}>
            Ingredients
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={register({
                required: true,
                minLength: 15,
              })}
              name='ingredients'
              as='textarea'
              defaultValue={recipe.ingredients}
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
              Save
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
            <Button onClick={goBack} variant='warning'>
              Back
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default EditRecipe;
