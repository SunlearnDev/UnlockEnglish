"use strict";

const { User } = require("../models/");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { CreatcTokenPair } = require("../auth/authUtils");
const keyTonkenService = require("./keyTokenService.service");
const { CodeValidator } = require("../utils/codeValidator.utils");


class AccessService {
  static signUp = async ({ fullname, email, password, code }) => {
    try {
      // Kiểm tra xem email đã tồn tại chưa
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) {
        return { message: "Email đã tồn tại" };
      }

      // Xác minh mã xác nhận
      const checkCode = await CodeValidator.validateCode({ email, code });
      if (!checkCode) {
        return { message: "Mã xác thực không hợp lệ hoặc đã hết hạn" };
      }

      // Tạo salt và hash mật khẩu
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password + salt, 10);

      // Tạo người dùng mới
      const newUser = await User.create(
        {
          fullname,
          email,
          password: passwordHash,
          salt,
          status: true,
        }
      );

      if (!newUser) {
        console.error(error.message);
        return { 
          message: "Đã có lỗi xảy ra khi tạo tài khoản" };
      }

      // Tạo token cho người dùng mới
      const privateKey = crypto.randomBytes(16).toString("hex");
      const publicKey = crypto.randomBytes(16).toString("hex");
      const createToken = await keyTonkenService.createToken({
        userId: newUser.id,
        publicKey,
        privateKey,
      });

      if (!createToken) {
        return { code: "403", message: "Lỗi tạo token" };
      }

      // Commit transaction

      // Tạo token pair
      const tokens = await CreatcTokenPair(
        { userId: newUser.id },
        publicKey,
        privateKey
      );

      return {
        message: "Đăng ký thành công",
        tokens,
      };
    } catch (error) {
      console.error(error.message); // Hiển thị lỗi
      return {
        message: "Đã có lỗi xảy ra khi tạo tài khoản",
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
