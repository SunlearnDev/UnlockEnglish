const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configs.mysql");
const User = require("./user.mysql");
const VerifyEmail = sequelize.define(
    "VerifyEmail",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Tên model User
                key: 'id' // Khóa ngoại tham chiếu đến trường `id` của model User
            }
        },
        token: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "verifyEmail",
        timestamps: false,
    }
);
module.exports = VerifyEmail;