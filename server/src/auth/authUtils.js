"use strict";

const JWT = require("jsonwebtoken");
const asyncHandler = require("../helpers/asynHandler");
const { AuthFailure, NotFoundError } = require("../core/error.respone");
const  keyTonkenService  = require("../services/keyTokenService.service");

const HEADER = {
    API_KEY: "x-api-key",
    USER_ID: 'user_id',
    AUTHORIZATION: 'authorization'
  };
const CreatcTokenPair = async (payload, publicKey, privateKey) =>{
    try{
        const accessToken = await JWT.sign(payload, publicKey, { expiresIn: "1h"});
        const refreshToken = await JWT.sign(payload, privateKey, { expiresIn: "7d"});
        
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
   
    const userId =  req.headers[HEADER.USER_ID];
    if(!userId) throw new AuthFailure("Invalid request");
    
    const keyStore = await keyTonkenService.findTokenId(userId);
    if(!keyStore) throw new NotFoundError("Không có keyStore");

    const accessToken = req.headers[HEADER.AUTHORIZATION];
    if(!accessToken) throw new AuthFailure("Invalid request");
    try {
        //TODO lỗi check id không khớp
        const decode = JWT.verify(accessToken, keyStore.publicKey);
        if(userId.toString() !== decode.userId.toString()) throw new AuthFailure("Id không khớp");
        req.keyStore = keyStore;
        return next();
    }catch(error){
        throw error;
    }
});

module.exports = { CreatcTokenPair, authentication };