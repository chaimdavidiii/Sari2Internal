import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import RecipesNav from "../RecipesNav";
import {
  ModalContainer,
  RecipesContainer,
  SpanModal,
  TableRecipe,
  THeadRecipe,
  THRecipe,
  THRecipeNum,
  TDRecipe,
  TDActions,
  TDLinkView,
  TDLinkEdit,
  TDLinkDelete,
  TRRecipe,
} from "./RecipeElements";

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
      <RecipesContainer>
        <ModalContainer>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <SpanModal>Delete '{deleteTitle}'</SpanModal>
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
        </ModalContainer>

        <h1>Recipes</h1>

        <TableRecipe>
          <THeadRecipe>
            <TRRecipe>
              <THRecipeNum>#</THRecipeNum>
              <THRecipe>Title</THRecipe>
              <THRecipe>Description</THRecipe>
              <THRecipe>Ingredients</THRecipe>
              <THRecipe>Actions</THRecipe>
            </TRRecipe>
          </THeadRecipe>
          <tbody>
            {recipeList.map((val, key) => {
              return (
                <TRRecipe key={key}>
                  <TDRecipe>{key + 1}</TDRecipe>
                  <TDRecipe>{val.title}</TDRecipe>
                  <TDRecipe>{val.description}</TDRecipe>
                  <TDRecipe>{val.ingredients}</TDRecipe>
                  <TDActions>
                    <TDLinkView to={`/recipes/${val._id}`}>View</TDLinkView>
                    <TDLinkEdit to={`/recipes/${val._id}/edit`}>
                      Edit
                    </TDLinkEdit>
                    <TDLinkDelete
                      to={"/recipes"}
                      onClick={() => handleShow(val._id, val.title)}
                    >
                      Delete
                    </TDLinkDelete>
                  </TDActions>
                </TRRecipe>
              );
            })}
          </tbody>
        </TableRecipe>
        <Button variant='primary' onClick={addRecipe}>
          Add Recipe
        </Button>
        <hr />
      </RecipesContainer>
    </>
  );
}

export default Recipes;
