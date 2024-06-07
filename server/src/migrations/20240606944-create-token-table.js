const sequelize = require('../configs/configs.mysql');
const User = require('../models/token.mysql');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Tùy chọn force: true để xóa và tạo lại bảng nếu đã tồn tại
    console.log('Đồng bộ hóa cấu trúc bảng thành công!');
  } catch (err) {
    console.error('Lỗi khi đồng bộ hóa cấu trúc bảng:', err);
  }
}

syncDatabase();