const User = require('./Users/Users.mysql');
const Token = require('./Tokens/Token.mysql');
const SendCode = require('./Sendcode/SendCode.mysql')

// Thiết lập quan hệ sau khi các model được định nghĩa
User.hasOne(Token, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Token.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Token,
  SendCode,
};
