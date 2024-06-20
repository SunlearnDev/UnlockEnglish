"use strict"

const express = require("express");
const router = express.Router();



router.use("/api", require('./access/register'));

router.use("/api", require('./access/login'));

router.use("/api", require('./email/index'));

router.use("/api", require('./sendcode/index'));

module.exports = router;