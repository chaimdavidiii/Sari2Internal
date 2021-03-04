const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const RecipeModel = require("./models/Recipe");
const TrentsModel = require("./models/Trents");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://chaimdavidiii:" +
    process.env.PASSWORD +
    "@webdevtutorial.yed8v.mongodb.net/sari_sari?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.get("/read", async (req, res) => {
  // RecipeModel.find({ $where: {title: "kare"}}, )
  await RecipeModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/orders/trents", async (req, res) => {
  await TrentsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.post("/orders/trents", async (req, res) => {
  const item = req.body.item;
  const quantity = req.body.quantity;

  const trents = new TrentsModel({
    item: item,
    quantity: quantity,
  });
  try {
    await trents.save();
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/recipes/:id", async (req, res) => {
  const id = req.params.id;
  await RecipeModel.findById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/recipes", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const ingredients = req.body.ingredients;

  const recipe = new RecipeModel({
    title: title,
    description: description,
    ingredients: ingredients,
  });
  try {
    await recipe.save();
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

app.put("/recipes/update", async (req, res) => {
  const newTitle = req.body.newTitle;
  const newDescription = req.body.newDescription;
  const newIngredients = req.body.newIngredients;
  const id = req.body.id;

  try {
    await RecipeModel.findById(id, async (err, updatedRecipe) => {
      updatedRecipe.title = newTitle;
      updatedRecipe.description = newDescription;
      updatedRecipe.ingredients = newIngredients;
      await updatedRecipe.save();
      res.send("success");
    });
  } catch (error) {
    console.log(err);
  }
});

app.delete("/recipes/delete/:id", async (req, res) => {
  const id = req.params.id;
  await RecipeModel.findByIdAndRemove(id).exec();
  res.send("success");
});

app.listen(3001, () => console.log("Connected to server!"));
