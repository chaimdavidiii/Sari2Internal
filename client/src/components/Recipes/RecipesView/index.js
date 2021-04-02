import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Modal from "react-bootstrap/modal";
import { IconContext } from "react-icons";
import { BsFillTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import {
  RecipeContainer,
  RecipeCard,
  RecipeBody,
  RecipeImage,
  RecipeTitle,
  RecipeTextArea,
  RecipeButtonContainer,
  RecipeButtonBack,
  RecipeButtonEdit,
  RecipeButtonDelete,
  RecipeModalButton,
  ModalContainer,
  SpanModal,
} from "./RecipesViewElements";
import { Image } from "cloudinary-react";

function ViewRecipe() {
  const [recipe, setRecipe] = useState({});
  const [show, setShow] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const [deleteImage_Id, setDeleteImage_Id] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const handleClose = () => setShow(false);

  const deleteRecipe = () => {
    console.log(deleteImage_Id);
    Axios.delete(`http://localhost:3001/recipes/delete/${deleteID}`, {
      data: {
        imageidtoDelete: deleteImage_Id,
      },
    }).then((response) => {
      if (response.statusText === "OK") {
        handleClose();
        goBack();
      }
    });
  };

  const goBack = () => {
    history.push("/recipes");
  };

  const handleShow = (id, title, deleteImage) => {
    setShow(true);
    console.log(show);
    setDeleteImage_Id(deleteImage);
    setDeleteTitle(title);
    setDeleteID(id);
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      console.log(response);
      setRecipe(response.data);
    });
  }, [id]);

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
        <RecipeCard>
          <RecipeBody>
            <RecipeImage>
              <Image
                cloudName={process.env.REACT_APP_CLOUD_NAME}
                publicId={recipe.image_Id}
                width='490'
                height='390'
                crop='scale'
              />
            </RecipeImage>
            <RecipeTitle>"{recipe.title}"</RecipeTitle>
            <RecipeTextArea>
              <h4>Description:</h4>
              {recipe.description}
            </RecipeTextArea>
            <RecipeTextArea>
              <h4>Ingredients:</h4>
              {recipe.ingredients}
            </RecipeTextArea>
            <RecipeButtonContainer>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <RecipeButtonBack
                  onClick={() => {
                    goBack();
                  }}
                >
                  <BiArrowBack />
                </RecipeButtonBack>
                <RecipeButtonEdit to={`/recipes/${recipe._id}/edit`}>
                  <AiTwotoneEdit />
                </RecipeButtonEdit>
                <RecipeButtonDelete
                  onClick={() =>
                    handleShow(recipe._id, recipe.title, recipe.image_Id)
                  }
                >
                  <BsFillTrashFill />
                </RecipeButtonDelete>
              </IconContext.Provider>
            </RecipeButtonContainer>
          </RecipeBody>
        </RecipeCard>
      </RecipeContainer>
    </>
  );
}

export default ViewRecipe;
