"use strict";

const { ApiKey } = require("../models");
const crypto = require("crypto");

const creatApiKey = async (permissions) => {
  try {
    const key = crypto.randomBytes(32).toString("hex");
    const newObjKey = await ApiKey.create({ key, status: true, permissions });
    return newObjKey;
  } catch (error) {
    throw error;
  }
};

const findBykey = async (key) => {
  const objKey = await ApiKey.findOne({ where: { key: key, status: true } });
  return objKey;
};

module.exports = {
  findBykey,
  creatApiKey,
};
