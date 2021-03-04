const mongoose = require("mongoose");

const MeatSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Meat = mongoose.model("Meat", MeatSchema);
module.exports = Meat;
