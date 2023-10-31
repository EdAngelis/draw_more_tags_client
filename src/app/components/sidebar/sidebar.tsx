import React from "react";
import style from "./sidebar.module.css";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { FaCashRegister, FaHandsHelping } from "react-icons/fa";
export default function Sidebar() {
  const menu = [
    {
      name: "Home",
      path: "/",
      icon: <AiTwotoneHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaCashRegister />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaHandsHelping />,
    },
  ];
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
    </div>
  );
}
