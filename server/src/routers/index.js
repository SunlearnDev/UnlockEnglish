"use strict"

const express = require("express");
const router = express.Router();
const { apiKey, permission } = require("../auth/checkAuth");

router.use("/api", require('./sendcode/index'));
router.use("/api", require('./email/index'));
router.use("/api", require('./access'));

router.use(apiKey);

router.use(permission(["READ", "WRITE", "DELETE", "SHARE", "UPLOAD"]));

router.use("/api", require('./apikey/apikey'));

module.exports = router;