"use strict"

const AccessService = require("../services/access.service");

class accessController {
    signUp = async (req, res, next) =>{
        try{
            return res.status(201).json( await AccessService.signUp(req.body))
        }
        catch(err){
            next(err);
        }
    }

}

module.exports = new accessController();