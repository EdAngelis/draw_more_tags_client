import React, { useState } from "react";
import style from "./input.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps {
  label: string;
  value?: string;
  name: string;
  password?: boolean;
  placeholder?: string;
  error?: string | null;
  icon?: React.ReactNode;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  password = false,
  error = null,
  placeholder,
  icon,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor={name}>{label}</label>
        </div>
        <div className={style.inputRow}>
          <div className={style.icon}>
            {!password ? (
              icon
            ) : showPassword ? (
              <div onClick={toggleShowPassword}>
                <AiFillEye />
              </div>
            ) : (
              <div onClick={toggleShowPassword}>
                <AiFillEyeInvisible />
              </div>
            )}
          </div>
          <input
            className={style.input}
            id={name}
            name={name}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={handleInputChange}
          />
        </div>
        <div>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
};

export default Input;
