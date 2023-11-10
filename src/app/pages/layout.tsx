"use client";
import React, { Suspense, useContext, useEffect } from "react";
import style from "./layout.module.css";
import UserProvider from "@/providers/user.provider";
import Sidebar from "../components/sidebar/sidebar";
import { userContext } from "@/providers/user.provider";
import Loading from "./loading";
export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useContext(userContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <UserProvider>
      <div className={style.layout}>
        <Suspense fallback={<Loading />}>
          <Sidebar />
          <div className={style.children}>{children}</div>
        </Suspense>
      </div>
    </UserProvider>
  );
}
