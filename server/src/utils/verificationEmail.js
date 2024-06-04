const nodemailer = require('nodemailer');
const userEh = require('../models/user.model');

class VerificationEmail {
  static resendVerificationEmail = async (email) => {
    try {
      // Tìm người dùng theo email
      const user = await userEh.findOne({ email });

      if (!user) {
        throw new Error('Không tìm thấy người dùng');
      }

      if (user.verify) {
        throw new Error('Tài khoản đã được xác minh');
      }

      // Gửi lại email xác nhận
      const transporter = nodemailer.createTransport({
        // Cấu hình nodemailer
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Xác thực tài khoản',
        html: `
          <h1>Chào mừng bạn đến với website của chúng tôi</h1>
          <p>Click vào link dưới đây để xác thực tài khoản của bạn</p>
          <a href="http://localhost:3000/verify/${user._id}">Xác thực tài khoản</a>
        `,
      };

      await transporter.sendMail(mailOptions);
      return { message: 'Email xác nhận đã được gửi lại' };
    } catch (error) {
      console.error(error);
      throw new Error('Đã có lỗi xảy ra');
    }
  };
}

module.exports = VerificationEmail;