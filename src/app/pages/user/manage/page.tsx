"use client";
import React, { useEffect } from "react";
import Input from "@/app/components/inputs/input/input";
import style from "./manage_user.module.scss";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/models";

export default function ManageUser() {
  const router = useRouter();
  const schema = yup.object().shape({
    name: yup.string().email().required("name is required"),

    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
    rePassword: yup.string().required("Repeat password is required"),
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: User) => {
    console.log(data);
    router.push("/user");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>Register User</div>
            <Input
              label="Name"
              name="name"
              placeholder="Name"
              onChange={(value) => setValue("name", value)}
              error={errors.email?.message || null}
            />
            <Input
              label="E-mail"
              name="email"
              placeholder="E-mail"
              onChange={(value) => setValue("email", value)}
              error={errors.email?.message || null}
            />

            <Input
              password={true}
              label="Password"
              name="password"
              placeholder="Password"
              icon={<RiLockPasswordFill />}
              onChange={(value) => setValue("password", value)}
              error={errors.password?.message || null}
            />
            <Input
              password={true}
              label="Re-writer Password"
              name="password"
              placeholder="Password"
              icon={<RiLockPasswordFill />}
              onChange={(value) => setValue("password", value)}
              error={errors.password?.message || null}
            />
            <button className={style.button} type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
