const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  prep: {
    type: String,
  },
  cookingProcedure: {
    type: String,
  },
  garnish: {
    type: String,
  },
  image: {
    type: String,
  },
  image_Id: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
