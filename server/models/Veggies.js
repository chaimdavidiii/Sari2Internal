const mongoose = require("mongoose");

const VeggiesSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Veggies = mongoose.model("Veggies", VeggiesSchema);
module.exports = Veggies;
