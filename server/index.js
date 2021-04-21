const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
const RecipeModel = require("./models/Recipe");
const TrentsModel = require("./models/Trents");
const MeatModel = require("./models/Meat");
const AsianModel = require("./models/Asian");
const VeggiesModel = require("./models/Veggies");
const cors = require("cors");
const { cloudinary } = require("./utils/cloudinary");
const { transporter } = require("./utils/nodemailer");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
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

// send email
app.post("/orders/email", async (req, res) => {
  const section = req.body.section;
  console.log(section);

  let trents = await TrentsModel.find({});
  let trentsMessage = `<table>
  <thead>
    <tr>
        <th>#</th>
        <th>Item</th>
        <th>Quantity</th>
    </tr>
  </thead>
    <tbody>
      ${trents
        .map((val, key) => {
          return `<tr>
            <td>${key + 1}.</td>
            <td><strong>${val.item}</strong></td>
            <td>${val.quantity}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>
    `;

  let asian = await AsianModel.find({});
  let asianMessage = `<table>
  <thead>
    <tr>
        <th>#</th>
        <th>Item</th>
        <th>Quantity</th>
    </tr>
  </thead>
    <tbody>
      ${asian
        .map((val, key) => {
          return `<tr>
            <td>${key + 1}.</td>
            <td><strong>${val.item}</strong></td>
            <td>${val.quantity}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>
    `;

  let meat = await MeatModel.find({});
  let meatMessage = `<table>
  <thead>
    <tr>
        <th>#</th>
        <th>Item</th>
        <th>Quantity</th>
    </tr>
  </thead>
    <tbody>
      ${meat
        .map((val, key) => {
          return `<tr>
            <td>${key + 1}.</td>
            <td><strong>${val.item}</strong></td>
            <td>${val.quantity}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>
    `;

  let veggies = await VeggiesModel.find({});
  let veggiesMessage = `<table>
  <thead>
    <tr>
        <th>#</th>
        <th>Item</th>
        <th>Quantity</th>
    </tr>
  </thead>
    <tbody>
      ${veggies
        .map((val, key) => {
          return `<tr>
            <td>${key + 1}.</td>
            <td><strong>${val.item}</strong></td>
            <td>${val.quantity}</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>
    `;

  let mailOptions = {
    from: "Sari-sari Internal",
    to: "chaimdavidiii@gmail.com",
    subject: section,
    html:
      section === "Trents"
        ? trentsMessage
        : section === "Asian"
        ? asianMessage
        : section === "Meat"
        ? meatMessage
        : veggiesMessage,
  };

  try {
    let sendMail = await transporter.sendMail(mailOptions);
    res.send("success!");
    console.log("email sent!");
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

// // //cloudinary
// app.post("/api/upload", async (req, res) => {
//   try {
//     const fileStr = req.body.data;
//     const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: "sari2internal",
//     });
//     console.log(uploadedResponse);
//     res.json({ msg: "YAYAYAYA!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ err: "Something went wrong.." });
//   }
// });

// post new recipe
app.post("/recipes", async (req, res) => {
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
app.put("/recipes/update", async (req, res) => {
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
app.delete("/recipes/delete/:id", async (req, res) => {
  await cloudinary.uploader.destroy(req.body.imageidtoDelete);
  const id = req.params.id;
  await RecipeModel.findByIdAndRemove(id).exec();
  res.send("success");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Connected to port ${port}!`));
