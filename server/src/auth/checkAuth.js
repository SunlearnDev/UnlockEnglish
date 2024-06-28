"use strict";

const { findBykey } = require("../services/apiKey.service");

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.status(401).json({ message: "API Key is required" });
    }
    //check key
    const objKey = await findBykey(key);
    if (!objKey) {
      return res.status(401).json({ message: "Invalid API Key" });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
const permission = (permissions) => {
  return (req, res, next) => {
    try {
      const objKey = req.objKey;
      const objPermissions = objKey.permissions.split(",");
      const check = permissions.some((permission) =>
        objPermissions.includes(permission)
      );
      if (!check) {
        return res.status(401).json({ message: "Invalid permission" });
      }
      return next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };
};

module.exports = { apiKey, permission };
