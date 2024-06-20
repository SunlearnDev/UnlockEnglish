const express = require('express');
const router = express.Router();
const verify = require("../../controllers/Sendcode/Sendcode.controller")

router.post('/email/send-email', verify.Code)

module.exports = router;
