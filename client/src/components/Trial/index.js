import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/modal";
import RecipesNav from "../Recipes/RecipesNav";
import { BsFillTrashFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import RecipesSideBar from "../Recipes/RecipesSideBar";

import {
  RecipeContainer,
  RecipeH1,
  RecipeWrapper,
  RecipeCard,
  RecipeIcon,
  RecipeTitle,
  RecipeP,
  RecipeActions,
  RecipeLinkView,
  RecipeLinkEdit,
  RecipeLinkDelete,
  RecipeButtonAdd,
  SpanModal,
  ModalContainer,
} from "./TrialElements";

const Recipe = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
    history.push("/trial");
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
      <RecipesSideBar isOpen={isOpen} toggle={toggle} />
      <RecipesNav toggle={toggle} />
      <RecipeContainer>
        <ModalContainer>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <SpanModal>Delete '{deleteTitle}'</SpanModal>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
              <RecipeButtonAdd variant='primary' onClick={deleteRecipe}>
                Yes
              </RecipeButtonAdd>
              <RecipeButtonAdd variant='secondary' onClick={handleClose}>
                No
              </RecipeButtonAdd>
            </Modal.Footer>
          </Modal>
        </ModalContainer>

        <RecipeH1>The Recipes</RecipeH1>
        <RecipeWrapper>
          {recipeList.map((val, key) => {
            return (
              <RecipeCard>
                <RecipeIcon
                  src={require("../images/default-image.jpg").default}
                />
                <h3>Title:</h3>
                <RecipeTitle>{val.title}</RecipeTitle>
                <h3>Description:</h3>
                <RecipeP>{val.description}</RecipeP>
                <h3>Ingredients:</h3>
                <RecipeP>{val.ingredients}</RecipeP>
                <RecipeActions>
                  <RecipeLinkView to={`/recipes/${val._id}`}>
                    <BiShow />
                  </RecipeLinkView>
                  <RecipeLinkEdit to={`/recipes/${val._id}/edit`}>
                    <AiTwotoneEdit />
                  </RecipeLinkEdit>
                  <RecipeLinkDelete
                    // to={"/recipes"}
                    onClick={() => handleShow(val._id, val.title)}
                  >
                    <BsFillTrashFill />
                  </RecipeLinkDelete>
                </RecipeActions>
              </RecipeCard>
            );
          })}
        </RecipeWrapper>
        {/* <RecipeCard>
          <RecipeIcon src={require("../images/sari2.svg").default} />
          <RecipeTitle>Reduce Expenses</RecipeTitle>
          <RecipeP>Blah blah blah</RecipeP>
        </RecipeCard>
        <RecipeCard>
          <RecipeIcon src={require("../images/sari3.svg").default} />
          <RecipeTitle>Reduce Expenses</RecipeTitle>
          <RecipeP>Blah blah blah</RecipeP>
        </RecipeCard> */}
      </RecipeContainer>
    </>
  );
};

export default Recipe;
