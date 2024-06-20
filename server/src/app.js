const express = require('express');
const app = express();
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('dotenv').config(); 
require('./configs/configs.mysql')

app.use(cors());

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// db connection


// Routes

app.use('',require('./routers'));

// Error handling middleware





module.exports = app;