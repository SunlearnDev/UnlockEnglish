const express = require('express');
const router = express.Router();
const verify = require("../../controllers/email.controller")

router.post('/email/send-email', verify.CheckSuccess)

module.exports = router;
