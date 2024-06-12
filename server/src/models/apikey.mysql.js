const { DataTypes } = require("sequelize");
const sequelize = require("../configs/configs.mysql");

const ApiKey = sequelize.define(
    "ApiKey",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        permissions: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD']],
            },
        },
    },
    {
        tableName: "apikeys",
        timestamps: false,
    }
);

module.exports = ApiKey;
