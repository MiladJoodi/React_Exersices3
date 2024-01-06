import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./App.css";

export default function App() {
  const schema = yup.object({
    name: yup.string().required("وارد کردن فیلد نام اجباریه !!"),
    email: yup
      .string()
      .email("ایمیل وارد شده معتبر نمی‌باشد !!")
      .required("وارد کردن فیلد ایمیل اجباریه !!"),
  });

  const {
    register,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();

      return {
        name: data.name,
        email: data.email,
      };
    },
    resolver: yupResolver(schema),
  });

  console.log("Errors =>", errors);

  const formSubmitting = (data) => {
    // console.log("Data =>", data);
    console.log("Form Values =>", getValues(["name", "email"]));
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit(formSubmitting)}>
          <input type="text" {...register("name")} placeholder="Name ..." />
          {errors.name && errors.name.message}

          <input type="text" {...register("email")} placeholder="Email ..." />
          {errors.email && errors.email.message}

          <button type="submit">Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
}
