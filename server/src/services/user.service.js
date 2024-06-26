'use strict';
const { User } = require('../models');   

const findByEmail = async ({ email, select = ['id', 'email', 'fullname', 'password', 'salt', 'status'] }) => {
    try {
        // Kiểm tra giá trị của select, đảm bảo nó là một mảng
        if (!Array.isArray(select)) {
            throw new Error("Chưa chọn thuộc tính cần lấy");
        }

        const user = await User.findOne({ 
            where: { email: email },
            attributes: select
        });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = findByEmail;
