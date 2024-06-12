const User = require('./user.mysql');
const Token = require('./token.mysql');
const VerifyEmail = require('./verifyEmail.mysql');

// Thiết lập quan hệ sau khi các model được định nghĩa
User.hasOne(Token, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
User.hasOne(VerifyEmail, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Token.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
VerifyEmail.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
module.exports = {
  User,
  Token,
  VerifyEmail,
};
