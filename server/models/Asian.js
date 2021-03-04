const mongoose = require("mongoose");

const AsianSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Asian = mongoose.model("Asian", AsianSchema);
module.exports = Asian;
