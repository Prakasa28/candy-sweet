import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  maxLength,
}) => (
  <div>
    <p>{label}</p>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  </div>
);

export default InputField;
