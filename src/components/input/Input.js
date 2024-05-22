import React from "react";
import style from "./Input.module.css";
const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  styleClass = "",
}) => {
  return (
    <input
      className={`${style.input} ${styleClass}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
