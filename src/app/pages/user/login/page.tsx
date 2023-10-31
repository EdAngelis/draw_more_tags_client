"use client";
import React from "react";
import Link from "next/link";
import style from "./login.module.css";
import { Input } from "../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";

import * as yup from "yup";

export default function SignIn() {
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

  const onSubmit = (data: any) => {
    console.log(data);
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
