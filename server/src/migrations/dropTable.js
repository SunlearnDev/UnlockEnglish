const sequelize = require('../configs/configs.mysql');
const User = require('../models/user.mysql');

async function dropTable() {
  try {
    await User.drop(); // Xóa bảng users
    console.log('Bảng users đã được xóa thành công!');
  } catch (err) {
    console.error('Lỗi khi xóa bảng users:', err);
  } finally {
    sequelize.close();
  }
}

dropTable();