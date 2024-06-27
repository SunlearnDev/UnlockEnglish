const express = require('express');
const router = express.Router();
const accessController = require("../../controllers/access.controller")
const asyncHandler = require("../../helpers/asynHandler");
const { authentication } = require('../../auth/authUtils');

//TODO : "message": "Cannot destructure property 'email' of 'undefined' as it is undefined." lỗi 500
  

router.post('/login', asyncHandler(accessController.signIn));
router.post('/register', asyncHandler(accessController.signUp));

router.use(authentication);
router.post('/logout', asyncHandler(accessController.logout));

module.exports = router;