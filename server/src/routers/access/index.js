const express = require('express');
const router = express.Router();
const accessController = require("../../controllers/access.controller")
const asyncHandler = require("../../helpers/asynHandler")

router.post('/login', asyncHandler(accessController.signIn));
router.post('/register', asyncHandler(accessController.signUp));

module.exports = router;