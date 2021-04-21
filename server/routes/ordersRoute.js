const express = require("express");
const router = express.Router();
const TrentsModel = require("../models/Trents");
const MeatModel = require("../models/Meat");
const AsianModel = require("../models/Asian");
const VeggiesModel = require("../models/Veggies");
const { transporter } = require("../utils/nodemailer");

// get trents orders
router.get("/trents", async (req, res) => {
  await TrentsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post trents orders
router.post("/trents", async (req, res) => {
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
router.get("/meat", async (req, res) => {
  await MeatModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post meat orders
router.post("/meat", async (req, res) => {
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
router.get("/asian", async (req, res) => {
  await AsianModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post asian orders
router.post("/asian", async (req, res) => {
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
router.get("/veggies", async (req, res) => {
  await VeggiesModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

// post veggies orders
router.post("/veggies", async (req, res) => {
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
router.delete("/trents/:id", async (req, res) => {
  const id = req.params.id;
  await TrentsModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete meat item
router.delete("/meat/:id", async (req, res) => {
  const id = req.params.id;
  await MeatModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete asian item
router.delete("/asian/:id", async (req, res) => {
  const id = req.params.id;
  await AsianModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// delete veggies item
router.delete("/veggies/:id", async (req, res) => {
  const id = req.params.id;
  await VeggiesModel.findByIdAndRemove(id).exec();
  res.send("success");
});

// send email
router.post("/email", async (req, res) => {
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

module.exports = router;
