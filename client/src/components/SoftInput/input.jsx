import PropTypes from "prop-types";
import Input from "@material-tailwind/react";

const CustomInput = ({ label, size, type, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-2">{label}</label>
    <Input
      className={`w-full px-3 py-2 border rounded ${size}`}
      type={type}
      value={value}
      onChange={onChange}
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

CustomInput.defaultProps = {
  placeholder: "",
  error: false,
};

export default CustomInput;
