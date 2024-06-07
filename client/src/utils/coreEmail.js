import validator from 'validator';

const validateCode = ({ code }) => {
    const errors = {};
    
    if (validator.isEmpty(code)) {
        errors.code = 'Code is required.';
    } else if (!validator.isLength(code, { min: 6, max: 6 })) {
        errors.code = 'Code has 6 numbers.';
    } else if (!validator.isNumeric(code)) {
        errors.code = 'The code must be number.';
    }
    
    return errors;
}
export default validateCode;