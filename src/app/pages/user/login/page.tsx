"use client";
import React, { useEffect, useContext } from "react";
import { userContext } from "@/providers/user.provider";
import { useRouter } from "next/navigation";
import style from "./login.module.css";
import { Input } from "../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { signIn } from "../user.service";
import { User } from "@/models";

import * as yup from "yup";

export default function SignIn() {
  const { user, setUser } = useContext(userContext);
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const fetchUsers = async (user: User) => {
    const resp = await signIn(user);

    return resp;
  };

  const onSubmit = async (data: User) => {
    const user = await fetchUsers({
      email: "info@drawmoretags.com",
      password: "@drawmoretags.admin123",
    });
    if (user.data.email) {
      localStorage.setItem("user", JSON.stringify(user.data.email));
      setUser(user.data.email);
      router.push("/");
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>Login</div>
            <Input
              label=""
              name="email"
              placeholder="E-mail"
              icon={<BiSolidUser />}
              onChange={(value) => setValue("email", value)}
              error={errors.email?.message || null}
            />

            <Input
              password={true}
              label=""
              name="password"
              placeholder="Password"
              icon={<RiLockPasswordFill />}
              onChange={(value) => setValue("password", value)}
              error={errors.password?.message || null}
            />
            <button className={style.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
