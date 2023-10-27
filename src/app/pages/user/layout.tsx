import React from "react";
import style from "./layout.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className={style.layout}>{children}</div>;
}
