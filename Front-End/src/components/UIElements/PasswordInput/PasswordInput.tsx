import React, { InputHTMLAttributes, useState } from "react";

import Input from "../Input/index";

import Eye from "../../../assets/icons/icon-eye-view.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const PasswordInput: React.FC<Props> = props => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input__password">
      <Input {...props} type={showPassword ? "text" : "password"} />
      <img
        src={Eye}
        alt="eye"
        className="input__password-icon"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
};

export default PasswordInput;
