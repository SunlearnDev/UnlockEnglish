const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('unlockenglish', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;
