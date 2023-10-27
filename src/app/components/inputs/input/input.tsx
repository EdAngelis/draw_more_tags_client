import React, { useState } from "react";

interface InputProps {
  label: string;
  value?: string;
  name: string;
  password?: boolean;
  error?: string | null;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  password = false,
  error = null,
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
        <div>
          <input
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={handleInputChange}
          />
          {password && (
            <button onClick={toggleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
        <div>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
};

export default Input;
