const express = require("express");
const router = express.Router();
const RecipeModel = require("../models/Recipe");
const { cloudinary } = require("../utils/cloudinary");

// Recipes

// show recipes
router.get("/", async (req, res) => {
  // RecipeModel.find({ $where: {title: "kare"}}, )
  await RecipeModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// show particular recipe
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  await RecipeModel.findById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// post new recipe
router.post("/", async (req, res) => {
  try {
    const fileStr = req.body.image;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "sari2internal",
    });

    const image = uploadedResponse.secure_url;
    const image_Id = uploadedResponse.public_id;
    const title = req.body.title;
    const description = req.body.description;
    const ingredients = req.body.ingredients;

    const recipe = new RecipeModel({
      title: title,
      description: description,
      ingredients: ingredients,
      image: image,
      image_Id: image_Id,
    });
    await recipe.save();
    res.send("success");
  } catch (error) {
    console.error(error);
  }
});

// update recipe
router.put("/update", async (req, res) => {
  if (req.body.image === undefined) {
    const newTitle = req.body.newTitle;
    const newDescription = req.body.newDescription;
    const newIngredients = req.body.newIngredients;
    const id = req.body.id;

    await RecipeModel.findById(id, async (err, updatedRecipe) => {
      updatedRecipe.title = newTitle;
      updatedRecipe.description = newDescription;
      updatedRecipe.ingredients = newIngredients;
      await updatedRecipe.save();
      res.send("success");
    });
  } else {
    const fileStr = req.body.image;
    await cloudinary.uploader.destroy(req.body.imageToDelete);
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "sari2internal",
    });
    const image = uploadedResponse.secure_url;
    const image_Id = uploadedResponse.public_id;
    const newTitle = req.body.newTitle;
    const newDescription = req.body.newDescription;
    const newIngredients = req.body.newIngredients;
    const id = req.body.id;

    await RecipeModel.findById(id, async (err, updatedRecipe) => {
      updatedRecipe.image = image;
      updatedRecipe.image_Id = image_Id;
      updatedRecipe.title = newTitle;
      updatedRecipe.description = newDescription;
      updatedRecipe.ingredients = newIngredients;
      await updatedRecipe.save();
      res.send("success");
    });
  }
});

// delete recipe
router.delete("/delete/:id", async (req, res) => {
  await cloudinary.uploader.destroy(req.body.imageidtoDelete);
  const id = req.params.id;
  await RecipeModel.findByIdAndRemove(id).exec();
  res.send("success");
});

module.exports = router;
