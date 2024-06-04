const express = require('express');
const router = express.Router();
const mailController = require("../../../controllers/acc.controller")

router.post('/send-email', emailController.sendMail)

module.exports = router;
