import React from "react";
import style from "./button.module.scss";

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  form?: string;
}

export default function Button({
  onClick,
  children,
  type = "submit",
  form,
}: IButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={style.wrapper}>
      <button
        form={form}
        onClick={handleClick}
        type={type}
        className={style.button}
      >
        {children}
      </button>
    </div>
  );
}
