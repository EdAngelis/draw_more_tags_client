"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./user.module.scss";
import { AiFillDelete } from "react-icons/ai";
import { User } from "@/models";
import { getUsers, deleteUser } from "./user.service";

export default function User() {
  const [users, setUsers] = useState<User[]>([]);

  const takeUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  useEffect(() => {
    takeUsers();
  }, []);

  const hDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      takeUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1>Users</h1>
        <Link href={`/pages/user/create`}>ADD USER</Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className={style.tr} key={user._id}>
              <td className={style.td}>
                <span
                  className={style.deleteIcon}
                  title="d"
                  onClick={() => {
                    user._id && hDeleteUser(user._id);
                  }}
                >
                  <AiFillDelete />
                </span>
              </td>
              <td className={style.td}>{user.name}</td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>
                <Link href={`/pages/user/${user._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
