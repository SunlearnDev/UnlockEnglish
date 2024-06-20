"use strict";
const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    try {
      const newUser = await AccessService.signUp(req.body);
      return res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new AccessController();
