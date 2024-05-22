const express = require('express');
const app = express();
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');

require('./db/unlockEnglish.mongodb')

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// db connection


// Routes

app.use('',require('./routers'));

// Error handling middleware





module.exports = app;