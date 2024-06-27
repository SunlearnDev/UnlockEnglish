"use strict";

const JWT = require("jsonwebtoken");
const asyncHandler = require("../helpers/asynHandler");
const { AuthFailure, NotFoundError } = require("../core/error.respone");
const  keyTonkenService  = require("../services/keyTokenService.service");
const CreatcTokenPair = async (payload, publicKey, privateKey) =>{
    try{
        const accessToken = await JWT.sign(payload, publicKey, {expiresIn: "1h"});
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
   //TODO lấy cái headers chưa được
    const userId =  req.headers['HEADER.USERID'];
    if(!userId) throw new AuthFailure(" Invalid request");
    
    const keyStore = await keyTonkenService.findTokenId(userId);
    if(!keyStore) throw new NotFoundError("Không có keyStore");

    const accessToken = req.headers['HEADER.AUTHORIZATION'];
    if(!accessToken) throw new AuthFailure("Invalid request");
    try {
        const decode = JWT.verify(accessToken, keyStore.publicKey);
        if(userId !== decode.userId) throw new AuthFailure("Token không hợp lệ");
        req.keyStore = keyStore;
        return next();
    }catch(error){
        throw error;
    }
});

module.exports = { CreatcTokenPair, authentication };