const SendCode = require("../models/Sendcode/SendCode.mysql");

class CodeEmail {
  static async Code({ email }) {
    try {
      const generateCreateCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expireAt = new Date();
      expireAt.setMinutes(expireAt.getMinutes() + 10);

      const checkEmail = await SendCode.findOne({ where: { email: email } });

      if (checkEmail) {
        await checkEmail.update({
          code: generateCreateCode,
          expires_at: expireAt,
        });
        return {
          email: email,
          code: generateCreateCode,
          message: "Mã code đã được gửi lại",
        };
      }

      await SendCode.create({
        email,
        code: generateCreateCode,
        expires_at: expireAt,
      });
      return {
        email: email,
        code: generateCreateCode,
        message: "Mã code đã được gửi đến email của bạn",
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CodeEmail;

