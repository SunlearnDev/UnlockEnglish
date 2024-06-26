"use strict";
const AccessService = require("../services/access.service");
const { OK, CREATED, SuccessResponse } = require("../core/success.respone");
class AccessController {
      async signIn(req, res, next){
        new SuccessResponse({
          message: "Đăng nhập thành công",
          metadata: await AccessService.signIn(req.body)
        }).send(res);
      }
      async signUp(req, res, next){
        new CREATED({
          message: "Đăng ký thành công",
          metadata: await AccessService.signUp(req.body)
        }).send(res);
      }
      async logout(req, res, next){
        new OK({
          message: "Đăng xuất thành công",
          metadata: await AccessService.logout(req.body)
        }).send(res);
      }
}

module.exports = new AccessController();
