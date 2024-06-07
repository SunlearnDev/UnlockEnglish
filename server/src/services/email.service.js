"use strict"
const VUser = require("../models/user.model");

class Verify {
    static successMail = async (id) => {
        try {
            const user = await VUser.findById(id).lean();
            if (!user) {
                return {
                    message: "User not found",
                };
            }
            if (user.verify === true) {
                return {
                    message: "User already verified",
                };
            }
            const verifyUser = await VUser.findByIdAndUpdate(id, { 
                verify: true,
                status: "active"
            }, { new: true });
            return {
                message: "User verified successfully",
                data: verifyUser,
            };
        } catch (error) {
            console.error(error); // Hiển thị tên lỗi
            console.log(error.message); // Hiển thị thông báo lỗi
            return {
                code: "4022",
                message: "Đã có lỗi xảy ra",
                status: "error",
            };
        }
    }
}

module.exports = Verify;