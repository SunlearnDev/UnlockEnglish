"use strict"

const codeEmail = require("../../services/codeEmail.services");
const VerifyEmail = require("../../utils/email/email.utils");
const EmailContent = require("../../utils/email/emailtemplate.utils");

class Sendcode {
  Code = async (req, res, next) => {
    try {
      const { email } = req.body;
      const createCode = await codeEmail.Code({ email: email });

      if (createCode) {
        await VerifyEmail.sendMail(
          createCode.email,
          "Xác minh Email Unlock English",
          EmailContent(createCode.code)  // Đảm bảo createCode.code được sử dụng đúng
        );
      }

      return res.status(201).json(createCode);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new Sendcode();

