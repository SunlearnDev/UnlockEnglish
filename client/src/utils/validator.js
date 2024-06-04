// src/utils/validator.js
import validator from 'validator';

const validateRegisterForm = ({ fullname, email, password, confirmPassword }) => {
  const errors = {};

  if (validator.isEmpty(fullname)) {
    errors.fullname = 'Full Name is required.';
  } else if (!validator.isLength(fullname, { min: 5 })) {
    errors.fullname = 'Full Name must be at least 5 characters.';
  }

  if (validator.isEmpty(email)) {
    errors.email = 'Email is required.';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Invalid email address.';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'Password is required.';
  } else if (!validator.isLength(password, { min: 8 })) {
    errors.password = 'Password must be at least 8 characters.';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
  }

  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Confirm Password is required.';
  } else if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return errors;
};

export default validateRegisterForm;
