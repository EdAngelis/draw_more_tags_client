"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.scss";
import { AiFillDelete } from "react-icons/ai";
import { User } from "@/models";
import { getUsers } from "./user.service";

export default function User() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const takeUsers = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    takeUsers();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1>Users</h1>
        <button title="Add User">Add User</button>
      </div>
      <table>
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
            <tr key={user.id}>
              <button>
                <AiFillDelete />
              </button>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
