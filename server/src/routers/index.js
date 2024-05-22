"use strict"

const express = require("express");
const router = express.Router();



router.use("/api", require('./access/login'))

module.exports = router;