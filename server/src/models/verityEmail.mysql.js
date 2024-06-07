const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configs.mysql");

const verifiedEmail = sequelize.define(
    "verifiedEmail",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        tableName: "verifiedEmail",
        timestamps: false,
    }
);
module.exports = verifiedEmail;