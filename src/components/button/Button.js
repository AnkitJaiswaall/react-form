import React from "react";
import style from "./Button.module.css"; // Check the correct path

const Button = ({ text, onClick, styleClass = "" }) => {
  return (
    <button className={`${style.button} ${styleClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
