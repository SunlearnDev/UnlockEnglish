"use strict"

const VUser = require("../models/user.model");

class Verify {
    static VerifyUser = async (id) => {
        try {
            const user = await VUser.findById(id).lean();
        } catch (error) {
        }
    }
}
