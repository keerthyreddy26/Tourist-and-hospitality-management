const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const contactSchema = require("../validators/auth-validator");


router.route("/contact").post(contactForm);


module.exports = router;