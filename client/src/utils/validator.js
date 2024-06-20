import validator from 'validator';

const validateRegisterForm = ({ fullname, email, password }) => {
  let errors = {};

  // Validate fullname
  if (validator.isEmpty(fullname)) {
    errors.fullname = 'Tên bạn không được để trống.';
  } else {
    const words = fullname.trim().split(/\s+/);
    if (words.length < 2) {
      errors.fullname = 'Tên bạn cần ít nhất 2 từ.';
    } else {
      const invalidWords = words.filter(word => word.length < 2);
      if (invalidWords.length > 0) {
        errors.fullname = 'Mỗi từ trong tên cần ít nhất 2 ký tự.';
      }
    }
  }

  // Validate email
  if (validator.isEmpty(email)) {
    errors.email = 'Email không được để trống.';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Email không hợp lệ.';
  }

  // Validate password
  if (validator.isEmpty(password)) {
    errors.password = 'Mật khẩu không được để trống.';
  } else if (!validator.isLength(password, { min: 8 })) {
    errors.password = 'Mật khẩu phải có ít nhất 8 ký tự.';
  } else if (!validator.isStrongPassword(password)) {
    errors.password = 'Mật khẩu không đủ mạnh. Mật khẩu cần có ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 số và 1 ký tự đặc biệt.';
  } else if (password.toLowerCase().includes('password')) {
    errors.password = 'Mật khẩu không được chứa từ "password".';
  } else if (password.includes('123456')) {
    errors.password = 'Mật khẩu không được chứa từ "123456".';
  } 

  // Validate code
  // if (validator.isEmpty(code)) {
  //   errors.code = 'Mã xác nhận không được để trống.';
  // } else if (!validator.isNumeric(code)) {
  //   errors.code = 'Mã xác nhận chỉ chứa các ký tự số.';
  // } else if (!validator.isLength(code, { min: 6, max: 6 })) {
  //   errors.code = 'Mã xác nhận cần có đúng 6 ký tự.';
  // }

  return errors;
};

export default validateRegisterForm;
