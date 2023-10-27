"use client";
import React from "react";
import Link from "next/link";
import style from "./login.module.css";
import { Input } from "../../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>Sign In Page</div>
            <Input
              label="E-mail"
              name="email"
              onChange={(value) => setValue("email", value)}
              error={errors.email?.message || null}
            />

            <Input
              password={true}
              label="Password"
              name="password"
              onChange={(value) => setValue("password", value)}
              error={errors.password?.message || null}
            />
            <Link href="/pages/user/manager">Go to Sign Up Page</Link>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
