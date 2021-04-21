const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");
const orders = require("./routes/ordersRoute");
const recipes = require("./routes/recipesRoute");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/orders", orders);
app.use("/recipes", recipes);

mongoose.connect(
  `mongodb+srv://chaimdavidiii:${process.env.PASSWORD}@webdevtutorial.yed8v.mongodb.net/sari_sari?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Connected to port ${port}!`));
