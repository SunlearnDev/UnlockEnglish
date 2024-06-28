'use srtict'

const express = require('express');
const router = express.Router();
const ApiKeyController = require('../../controllers/API/ApiKey.controller');
const asyncHandler = require('../../helpers/asynHandler');


router.post('/create-api-key', asyncHandler(ApiKeyController.createApiKey));

module.exports = router;