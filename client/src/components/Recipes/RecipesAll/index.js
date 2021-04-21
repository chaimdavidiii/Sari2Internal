import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";

import {
  RecipeContainer,
  RecipeH1,
  RecipeWrapper,
  RecipeCard,
  RecipeTitle,
  RecipeLinkView,
  RecipeAddContainer,
  RecipeAddLink,
  RecipeIconWrapper,
} from "./RecipeElements";

const Recipe = () => {
  const [recipeList, setRecipeList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipeList(response.data);
    });
  }, [recipeList]);

  return (
    <>
      <RecipeContainer>
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
