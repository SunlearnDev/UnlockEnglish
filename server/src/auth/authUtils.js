"use strict";

const JWT = require("jsonwebtoken");
const asyncHandler = require("../helpers/asynHandler");
const CreatcTokenPair = async (payload, publicKey, privateKey) =>{
    try{
        const accessToken = await JWT.sign(payload, privateKey, {expiresIn: "1h"});
        const refreshToken = await JWT.sign(payload, privateKey, {expiresIn: "7d"});
        
        return {accessToken, refreshToken};
    }catch(error){
        return error;
    }
}
const authentication = asyncHandler(async (req, res, next) => { 
    /*
     1. check header
     2. Get accessToken from header
     3. Verify accessToken
     4. check  user in database
     5. check keyStore with accessToken
     6. Ok next()
    */
    const userId =  req.headers['HEADER.USERID'];
    

});

module.exports = { CreatcTokenPair, authentication };