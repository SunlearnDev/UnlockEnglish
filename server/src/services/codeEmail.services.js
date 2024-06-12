const { generateCreateCode } = require("../utils/creactcode.utils");
const { VerifyEmail } = require("../models");

class CodeEmail {
  static async Code({ userId }) {
    try {
      const CreactverifyEmail = await VerifyEmail.create({
        userId,
        token: generateCreateCode(),
      });
      return CreactverifyEmail;
    } catch (error) {
      console.error("Error creating code for email verification:", error);
      throw error;
    }
  }
}

module.exports = CodeEmail;
