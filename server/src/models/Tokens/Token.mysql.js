const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/configs.mysql");
const User = require("../Users/Users.mysql");
const Token = sequelize.define(
  "Token",
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
        key: "id", // Khóa ngoại tham chiếu đến trường `id` của model User
      },
    },
    publicKey: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    privateKey: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "tokens",
    timestamps: false,
  }
);

module.exports = Token;
