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

export default function Input({
  label,
  value,
  name,
  password = false,
  error = null,
  placeholder,
  icon,
  onChange,
}: InputProps) {
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
              icon ? (
                showPassword ? (
                  <div onClick={toggleShowPassword}>
                    <AiFillEye />
                  </div>
                ) : (
                  <div onClick={toggleShowPassword}>
                    <AiFillEyeInvisible />
                  </div>
                )
              ) : null
            ) : null}
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
}
