"use strict";

const { User } = require("../models/");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { CreatcTokenPair } = require("../auth/authUtils");
const keyTonkenService = require("./keyTokenService.service");
const { CodeValidator } = require("../utils/codeValidator.utils");
const getInfo = require("../utils");
const {
  BadRequest,
  ConflictRequestError,
  AuthFailure,
} = require("../core/error.respone");
const findByEmail = require("./user.service");

class AccessService {
  static async signIn({ email, password, refeshToken = null }) {
    try {
      // Các bước đăng nhập
      // 1. Kiểm tra xem email có tồn tại không
      // 2. Kiểm tra xem mật khẩu có đúng không
      // 3. Tạo token cho người dùng
      // 4. Trả về thông tin người dùng và token

      //1. Kiểm tra xem email có tồn tại không
      const user = await findByEmail({
        email,
        select: ["id", "email", "password", "salt"],
      });
      if (!user) throw new AuthFailure("Email hoặc mật khẩu không đúng");
      //2. Kiểm tra xem mật khẩu có đúng không
      const match = await bcrypt.compare(password + user.salt, user.password);
      if (!match) throw new AuthFailure("Email hoặc mật khẩu không đúng");
      //3. Tạo token cho người dùng
      const privateKey = crypto.randomBytes(16).toString("hex");
      const publicKey = crypto.randomBytes(16).toString("hex");

      const tokens = await CreatcTokenPair(
        { userId: user.id },
        publicKey,
        privateKey
      );
      
      await keyTonkenService.createToken({
        userId: user.id,
        publicKey,
        privateKey,
        refreshToken: tokens.refreshToken,
      });
      //4. Trả về thông tin người dùng và token
      return {
        metadata: {
          user: getInfo({ fileds: ["id", "fullname", "email"], data: user }),
          tokens,
        },
      };
    } catch (error) {
      throw error;
    }
  }
  static signUp = async ({ fullname, email, password, code }) => {
    try {
      // Kiểm tra xem email đã tồn tại chưa
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) throw new BadRequest("Email đã tồn tại");

      // Xác minh mã xác nhận
      const checkCode = await CodeValidator.validateCode({ email, code });
      if (!checkCode)
        throw new BadRequest("Mã xác nhận không hợp lệ hoặc đã hết hạn");

      // Tạo salt và hash mật khẩu
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password + salt, 10);

      // Tạo người dùng mới
      const newUser = await User.create({
        fullname,
        email,
        password: passwordHash,
        salt,
        status: true,
      });

      if (!newUser) throw new BadRequest("Lỗi tạo tài khoản");

      // Tạo token cho người dùng mới
      const privateKey = crypto.randomBytes(16).toString("hex");
      const publicKey = crypto.randomBytes(16).toString("hex");
      // Tạo token pair
      const tokens = await CreatcTokenPair(
        { userId: newUser.id },
        publicKey,
        privateKey
      );
      const createToken = await keyTonkenService.createToken({
        userId: newUser.id,
        publicKey,
        privateKey,
        refreshToken: tokens.refreshToken,
      });

      if (!createToken) throw new BadRequest("Lỗi tạo token");

      return {
        metadata: {
          user: getInfo({ fileds: ["id", "fullname", "email"], data: newUser }),
          tokens,
        },
      };
    } catch (error) {
      throw error;
    }
  };

  static async logout(keyStore) {
    try {
      return await keyTonkenService.removeToken(keyStore.userId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AccessService;
