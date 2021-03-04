const mongoose = require("mongoose");

const TrentsSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Trents = mongoose.model("Trents", TrentsSchema);
module.exports = Trents;
