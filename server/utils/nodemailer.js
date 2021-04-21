const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAILMAILER,
    pass: process.env.GMAILPASS,
  },
});

module.exports = { transporter };
