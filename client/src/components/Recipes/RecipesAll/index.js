import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/modal";
import { BsFillTrashFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Image } from "cloudinary-react";

import {
  RecipeContainer,
  RecipeH1,
  RecipeWrapper,
  RecipeCard,
  RecipeTitle,
  RecipeP,
  RecipeActions,
  RecipeLinkView,
  RecipeLinkEdit,
  RecipeSpanDelete,
  RecipeModalButton,
  RecipeAddContainer,
  RecipeAddLink,
  SpanModal,
  ModalContainer,
  RecipeIconWrapper,
} from "./RecipeElements";

const Recipe = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const [deleteImage_Id, setDeleteImage_Id] = useState("");
  const history = useHistory();

  const handleClose = () => setShow(false);

  const handleShow = (id, title, deleteImage) => {
    setShow(true);
    console.log(show);
    setDeleteImage_Id(deleteImage);
    setDeleteTitle(title);
    setDeleteID(id);
  };

  const deleteRecipe = () => {
    console.log(deleteImage_Id);
    Axios.delete(`http://localhost:3001/recipes/delete/${deleteID}`, {
      data: {
        imageidtoDelete: deleteImage_Id,
      },
    }).then((response) => {
      if (response.statusText === "OK") {
        handleClose();
        goback();
      }
    });
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
              <RecipeModalButton variant='primary' onClick={deleteRecipe}>
                Yes
              </RecipeModalButton>
              <RecipeModalButton variant='secondary' onClick={handleClose}>
                No
              </RecipeModalButton>
            </Modal.Footer>
          </Modal>
        </ModalContainer>

        <RecipeH1>The Recipes</RecipeH1>
        <RecipeAddContainer>
          <RecipeAddLink to='/recipes/new'>Add a Recipe</RecipeAddLink>
        </RecipeAddContainer>
        <RecipeWrapper>
          {recipeList.map((val, key) => {
            return (
              <RecipeLinkView to={`/recipes/${val._id}`}>
                <RecipeCard>
                  <RecipeIconWrapper>
                    <Image
                      cloudName={process.env.REACT_APP_CLOUD_NAME}
                      publicId={val.image_Id}
                      width='240'
                      height='240'
                      crop='scale'
                    />
                  </RecipeIconWrapper>
                  <RecipeTitle>{val.title}</RecipeTitle>
                </RecipeCard>
              </RecipeLinkView>
            );
          })}
        </RecipeWrapper>
      </RecipeContainer>
    </>
  );
};

export default Recipe;
