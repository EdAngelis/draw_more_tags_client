"use client";
import React, { useEffect, useContext } from "react";
import { userContext } from "@/providers/user.provider";
import style from "./sidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiTwotoneHome } from "react-icons/ai";
import { FaCashRegister, FaHandsHelping } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { set } from "react-hook-form";

export default function Sidebar() {
  const { user, setUser } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const menu = [
    {
      name: "Home",
      path: "/",
      icon: <AiTwotoneHome />,
    },
    {
      name: "Species",
      path: "/pages/species",
      icon: <FaCashRegister />,
    },
    {
      name: "Reviews",
      path: "/pages/reviews",
      icon: <FaHandsHelping />,
    },
    {
      name: "Users",
      path: "/pages/user/manage",
      icon: <FaHandsHelping />,
    },
  ];

  const handleLogout = () => {
    setUser("");
    router.push("/pages/user/login");
  };

  return (
    <div className={style.container}>
      <div className={style.top}></div>
      <nav>
        <ul className={style.nav}>
          {menu.map((item) => (
            <li className={style.menuItem} key={item.path}>
              <Link href={item.path}>
                {item.icon && <span className={style.icon}>{item.icon}</span>}
                <span className={style.name}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <div className={`${style.menuItem} ${style.white}`}>
          {user && (
            <Link href="/pages/user/login">
              <span className={`${style.icon} ${style.red}`}>
                <BiLogOut />
              </span>
              <a
                className={`${style.name} ${style.red}`}
                onClick={handleLogout}
              >
                Logout
              </a>
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
