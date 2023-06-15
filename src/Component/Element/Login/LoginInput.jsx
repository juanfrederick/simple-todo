import React from "react";
import "./login.css";
import { memo } from "react";

const LoginInput = ({ text, type, id, placeholder, value, onchange }) => {
  return (
    <div className="login-input-container">
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
};

export default memo(LoginInput);
