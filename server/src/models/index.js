const User = require('./user.mysql');
const Token = require('./token.mysql');

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
};
