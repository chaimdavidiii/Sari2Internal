const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const RecipeModel = require("./models/Recipe");
const TrentsModel = require("./models/Trents");
const MeatModel = require("./models/Meat");
const AsianModel = require("./models/Asian");
const VeggiesModel = require("./models/Veggies");
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

// ORDERS

// get trents orders
app.get("/orders/trents", async (req, res) => {
  await TrentsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post trents orders
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

// get meat orders
app.get("/orders/meat", async (req, res) => {
  await MeatModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post meat orders
app.post("/orders/meat", async (req, res) => {
  const item = req.body.item;
  const quantity = req.body.quantity;

  const meat = new MeatModel({
    item: item,
    quantity: quantity,
  });
  try {
    await meat.save();
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

// get asian orders
app.get("/orders/asian", async (req, res) => {
  await AsianModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post asian orders
app.post("/orders/asian", async (req, res) => {
  const item = req.body.item;
  const quantity = req.body.quantity;

  const asian = new AsianModel({
    item: item,
    quantity: quantity,
  });
  try {
    await asian.save();
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

// get veggies orders
app.get("/orders/veggies", async (req, res) => {
  await VeggiesModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post veggies orders
app.post("/orders/veggies", async (req, res) => {
  const item = req.body.item;
  const quantity = req.body.quantity;

  const veggies = new VeggiesModel({
    item: item,
    quantity: quantity,
  });
  try {
    await veggies.save();
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

// delete trents item

app.delete("/orders/trents/:id", async (req, res) => {
  const id = req.params.id;
  await TrentsModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete meat item
app.delete("/orders/meat/:id", async (req, res) => {
  const id = req.params.id;
  await MeatModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete asian item
app.delete("/orders/asian/:id", async (req, res) => {
  const id = req.params.id;
  await AsianModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete veggies item
app.delete("/orders/veggies/:id", async (req, res) => {
  const id = req.params.id;
  await VeggiesModel.findByIdAndRemove(id).exec();
  res.send("success");
});

//RECIPES

// show recipes
app.get("/read", async (req, res) => {
  // RecipeModel.find({ $where: {title: "kare"}}, )
  await RecipeModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// show particular recipe
app.get("/recipes/:id", async (req, res) => {
  const id = req.params.id;
  await RecipeModel.findById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// post new recipe
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

// update recipe
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

// delete recipe
app.delete("/recipes/delete/:id", async (req, res) => {
  const id = req.params.id;
  await RecipeModel.findByIdAndRemove(id).exec();
  res.send("success");
});

app.listen(3001, () => console.log("Connected to server!"));
