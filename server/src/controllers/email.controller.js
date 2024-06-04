"use strict"

const verifyEmail = require("../services/email.service");

class emailController {
    sendMail = async (req, res, next) =>{
        try{
            return res.status(201).json( await verifyEmail.sendMail(req.body))
        }
        catch(err){
            next(err);
        }
    }
}
module.exports = new emailController();