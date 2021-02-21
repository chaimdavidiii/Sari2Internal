import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function ViewRecipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      console.log(response);
      setRecipe(response.data);
    });
  }, [id]);

  return (
    <div className='Card mt-1'>
      <Card style={{ width: "24rem" }}>
        {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
        <Card.Body>
          <h2>Title:</h2>
          <Card.Title>"{recipe.title}"</Card.Title>
          <h3>Description:</h3>
          <Card.Text>
            <p>{recipe.description}</p>
          </Card.Text>
          <h4>Ingredients:</h4>
          <Card.Text>{recipe.ingredients}</Card.Text>
        </Card.Body>
      </Card>
      <Button className='mt-1' onClick={goBack} variant='primary'>
        Back
      </Button>
    </div>
  );
}

export default ViewRecipe;
