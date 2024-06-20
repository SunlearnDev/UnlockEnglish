const express = require('express');
const router = express.Router();
const SendCode = require("../../controllers/Sendcode/Sendcode.controller")

router.post('/send-code', SendCode.Code)

module.exports = router;
