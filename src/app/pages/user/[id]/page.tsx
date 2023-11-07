"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Input from "@/app/components/inputs/input/input";
import { RiLockPasswordFill } from "react-icons/ri";
import style from "./manage_user.module.scss";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/models";
import { getUser, updateUser, createUser } from "../user.service";

export default function ManageUser({ params }: { params: { id: string } }) {
  const _id = params.id;
  const router = useRouter();
  const [user, setUser] = React.useState<User>({} as User);
  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string(),
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const takeUser = async () => {
      if (_id !== "create") {
        const resp = await getUser(_id);
        setUser(resp);
        setValue("name", resp.name);
        setValue("email", resp.email);
      }
    };
    takeUser();
  }, [_id, setValue]);

  const onSubmit = async (data: User) => {
    try {
      if (_id !== "create") {
        await updateUser(params.id, data);
      } else {
        await createUser(data);
      }
      router.push("/pages/user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>Register User</div>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            name="name"
            placeholder={user.name || "Name"}
            onChange={(value) => setValue("name", value)}
            error={errors.email?.message || null}
          />
          <Input
            label="E-mail"
            name={"email"}
            placeholder={user.email || "E-mail"}
            onChange={(value) => setValue("email", value)}
            error={errors.email?.message || null}
          />

          {_id === "create" && (
            <>
              <Input
                password={true}
                label="Password"
                name="password"
                placeholder="Password"
                icon={<RiLockPasswordFill />}
                onChange={(value) => setValue("password", value)}
              />
              {/* <Input
                  password={true}
                  label="Re-writer Password"
                  name="password"
                  placeholder="Password"
                  icon={<RiLockPasswordFill />}
                  onChange={(value) => setValue("password", value)}
                  // error={errors.password?.message || null}
                /> */}
            </>
          )}
          <div className={style.actions}>
            <button className={style.button} type="submit">
              Save
            </button>
            <Link href={"/pages/user"} className={style.button}>
              cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
