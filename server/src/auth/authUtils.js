"use strict";

const JWT = require("jsonwebtoken");

const CreatcTokenPair = async (payload, publicKey, privateKey) =>{
    try{
        const accessToken = await JWT.sign(payload, privateKey, {expiresIn: "1h"});
        const refreshToken = await JWT.sign(payload, privateKey, {expiresIn: "7d"});
        JWT.verify(accessToken, publicKey,(err, decode) =>{
            if(err){
                return err;
            }
            return decode;
        
        });
        return {accessToken, refreshToken};
    }catch(error){
        console.log(error);
    }
}

module.exports = {CreatcTokenPair};