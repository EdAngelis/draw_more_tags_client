import React from "react";
import style from "./toast.module.scss";
import { Interface } from "readline";

interface ToastProps {
  message: string;
  type?: "success" | "failed";
  active?: boolean;
}

export default function Toast({
  message,
  type = "failed",
  active = false,
}: ToastProps) {
  return (
    <div className={style.toastWrapper}>
      {active && (
        <div>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
