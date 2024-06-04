  "use strict";

  const userEh = require("../models/user.model");
  const bcrypt = require("bcrypt");
  const crypto = require("crypto");

  class AccessService {
    static signUp = async ({ fullname, email, password }) => {
      try {
        const checkUserEl = await userEh.findOne({ email }).lean();
        if (checkUserEl) {
          return {
            message: " Email đã tồn tại",
          };
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const newUserEl = await userEh.create({
          fullname,
          email,
          password: passwordHash,
        });
        return newUserEl;
      } catch {
        console.error(error); // Hiển thị tên lỗi
        console.log(error.message); // Hiển thị thông báo lỗi
        return {
          code: "40004",
          message: "Đã có lỗi xảy ra",
          status: "error",
        };
      }
    };
  }

  module.exports = AccessService;
