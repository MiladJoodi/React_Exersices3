import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

export default function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
    }
  })

  const formSubmiting = (data) => {
    console.log("Data=> ", data)
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit(formSubmiting)}>
          <input type="text" {...register('name', {
            required: "وارد کردن نام الزامیست",
            minLength: {
              value: 3,
              message: "حداقل 3 کاراکتر وارد کنید"
            },
            maxLength: {
              value: 12,
              message: "حداکثر 12 کاراکتر وارد کنید"
            }
          })}
            placeholder="Name ..." />

          <input type="text" {...register('email', {
            required: "وارد کردن ایمیل الزامیست",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید"
            },
            maxLength: {
              value: 30,
              message: "حداکثر 30 کاراکتر وارد کنید"
            }
          })} placeholder="Email ..." />

          <button type="submit">Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
