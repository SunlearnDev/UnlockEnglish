"use strict"
const { Token } = require("../models");

class keyTonkenService{
    static createToken = async ({userId, publicKey, privateKey}) =>{
          try{
             const tokens = await Token.create({userId, publicKey, privateKey});
             return tokens ? tokens.publicKey : null;
          }catch(error){
              console.log(error);
          }
        };
}
module.exports = keyTonkenService;