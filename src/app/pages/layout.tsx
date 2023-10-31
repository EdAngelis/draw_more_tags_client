import React from "react";
import style from "./layout.module.css";
import UserProvider from "@/providers/user.provider";
import Sidebar from "../components/sidebar/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <Sidebar />
      <div className={style.layout}>{children}</div>;
    </UserProvider>
  );
}
