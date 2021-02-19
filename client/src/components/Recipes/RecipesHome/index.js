import React, { useState, useEffect } from "react";
import "./Recipes.css";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import RecipesNav from "../RecipesNav";

function Recipes() {
  const [recipeList, setRecipeList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = (id, title) => {
    setShow(true);
    setDeleteTitle(title);
    setDeleteID(id);
  };

  const deleteRecipe = () => {
    Axios.delete(`http://localhost:3001/recipes/delete/${deleteID}`).then(
      (response) => {
        if (response.statusText === "OK") {
          handleClose();
          goback();
        }
      }
    );
  };

  const goback = () => {
    history.push("/recipes");
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setRecipeList(response.data);
    });
  }, [recipeList]);

  const addRecipe = () => {
    history.push("/recipes/new");
  };

  return (
    <>
      <RecipesNav />
      <div className='Recipes'>
        <div className='modal'>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='modal__title'>
                Delete '{deleteTitle}'
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={deleteRecipe}>
                Yes
              </Button>
              <Button variant='secondary' onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <h1>Recipes</h1>
        <Table bordered hover>
          <thead className='thead'>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Ingredients</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recipeList.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.description}</td>
                  <td>{val.ingredients}</td>
                  <td className='actions'>
                    <Link to={`/recipes/${val._id}`}>View</Link>
                    <Link to={`/recipes/${val._id}/edit`}>Edit</Link>
                    <Link
                      to={"/recipes"}
                      onClick={() => handleShow(val._id, val.title)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant='primary' onClick={addRecipe}>
          Add Recipe
        </Button>
        <hr />
      </div>
    </>
  );
}

export default Recipes;
