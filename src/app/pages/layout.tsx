import React from "react";
import style from "./layout.module.css";
import UserProvider from "@/providers/user.provider";
import Sidebar from "../components/sidebar/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className={style.layout}>
        <Sidebar />
        <div>{children}</div>;
      </div>
    </UserProvider>
  );
}
