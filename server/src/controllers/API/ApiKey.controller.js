"use strict";
const { creatApiKey } = require("../../services/apiKey.service");
const { CREATED } = require("../../core/success.respone");

class ApiKeyController {
  async createApiKey(req, res, next) {
    new CREATED({
      message: "Tạo API Key thành công",
      metadata: await creatApiKey(req.body.permissions),
    }).send(res);
  }
}
module.exports = new ApiKeyController();
