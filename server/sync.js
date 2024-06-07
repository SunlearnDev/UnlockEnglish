// src/sync.js
const sequelize = require('./src/configs/configs.mysql');
const {  Token } = require('./src/models');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

syncDatabase();
