import React, { useState } from "react";
import style from "./input.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputProps {
  label: string;
  value?: string;
  name: string;
  password?: boolean;
  placeholder?: string;
  type?: string;
  error?: string | null;
  icon?: React.ReactNode;
  register?: UseFormRegister<FieldValues>;
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
  type = "text",
  onChange,
  register,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div></div>
        <div className={style.inputRow}>
          <div className={style.icon}>
            {!password ? (
              icon ? (
                icon
              ) : null
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
          <label htmlFor={name}></label>
          <input
            className={style.input}
            id={name}
            name={name}
            placeholder={placeholder}
            type={password ? (showPassword ? "text" : "password") : type}
            value={value}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.error}>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
}
