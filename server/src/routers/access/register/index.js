const express = require('express');
const router = express.Router();
const accessController = require("../../../controllers/access.controller")

router.post('/register', accessController.signUp)

module.exports = router;