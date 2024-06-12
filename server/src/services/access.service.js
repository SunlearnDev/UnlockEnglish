"use strict";

const { User } = require("../models");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { CodeEmail } = require("./codeEmail.services");
const { CreatcTokenPair } = require("../auth/authUtils");
const keyTonkenService = require("./keyTokenService.service");

class AccessService {
  static signUp = async ({ fullname, email, password }) => {
    try {
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) {
        return {
          message: " Email đã tồn tại",
        };
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        fullname,
        email,
        password: passwordHash,
      });
      if (newUser) {
        const privateKey = crypto.randomBytes(16).toString("hex");
        const publicKey = crypto.randomBytes(16).toString("hex");

        const createToken = await keyTonkenService.createToken({
          userId: newUser.id,
          publicKey,
          privateKey,
        });
        if (!createToken) {
          return {
            code: "403",
            message: " Lỗi tạo token ",
          };
        }
        const tokens = await CreatcTokenPair(
          { userId: newUser.id },
          publicKey,
          privateKey
        );
      
        return {
          ...tokens,
          ...newUser.toJSON(),
        };
      }
    } catch(error) {
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
