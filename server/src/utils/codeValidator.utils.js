const { Op } = require('sequelize');    
const { SendCode } = require('../models');

class CodeValidator {
    static async validateCode({ email, code }) {
        try {
            const sendCode = await SendCode.findOne({
                where: {
                    email,
                    code,
                    used: false,
                    expires_at: {
                        [Op.gt]: new Date(),
                    },
                },
            });
            if (sendCode) {
                sendCode.used = true;
                await sendCode.save();
                return sendCode;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = {CodeValidator};