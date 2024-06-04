const nodemailer = require("nodemailer");
require("dotenv").config();

class VerifyEmail {
  static sendMail = async (to, subject, htmlContent) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: to,
        subject: subject,
        html: htmlContent,
      };

      const info = await transporter.sendMail(mailOptions);
      return {
        message:
          "Email đã được gửi đến hòm thư của bạn, vui lòng kiểm tra và xác thực tài khoản của bạn",
        info,
      };
    } catch (error) {
      console.error(error.message); // Hiển thị tên lỗi
      throw new Error("Không thể gửi email xác nhận");
    }
  };
}

module.exports = VerifyEmail;
