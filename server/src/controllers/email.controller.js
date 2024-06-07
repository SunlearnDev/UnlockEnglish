"use strict"

const verifyEmail = require("../services/email.service");

class Verify {
    CheckSuccess = async (req, res, next) =>{
        try{
            const {userId} = req.params;
            const result = await verifyEmail.successMail(userId);
            if(!result){
                return res.status(404).json()
            }
            const loginLink = `${CLIENT_HOST}/login`;
            return res.status(201).json()
        }
        catch(err){
            next(err);
        }
    }
}
module.exports = new Verify();