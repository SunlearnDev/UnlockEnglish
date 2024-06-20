const nodemailer = require("nodemailer");
require("dotenv").config();

class VerifyEmail {
  static sendMail = async (to, subject, htmlContent) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT === "465",
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
      return  info;
     
    } catch (error) {
      console.error(error.message); // Hiển thị tên lỗi
      throw new Error("Không thể gửi email xác nhận");
    }
  };
}

module.exports = VerifyEmail;
