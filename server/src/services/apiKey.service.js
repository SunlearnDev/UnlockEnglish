"use strict"

const {Token} = require("../models");   
const crypto = require("crypto");

const findByID = async (key) =>{
    const newKey = await Token.create({ key: crypto.randomBytes(16).toString("hex") });
    
}