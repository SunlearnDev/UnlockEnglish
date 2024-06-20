"use strict"
const express = require("express");
const VerifyEmail = require("../utils/email/email.utils");
const EmailContent = require("../utils/email/emailtemplate.utils");
const CodeValidator = require("../utils/codeValidator.utils");

module.exports = {
    VerifyEmail,
    EmailContent,
};