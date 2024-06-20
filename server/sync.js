// src/sync.js
const sequelize = require('./src/configs/configs.mysql');
const  {User, Token}  = require('./src/models');
const  {SendCode}  = require('./src/models/Sendcode/SendCode].mysql');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
