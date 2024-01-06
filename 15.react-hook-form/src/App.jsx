import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools'

import "./App.css";

export default function App() {
  const { 
    register,
    control,
    handleSubmit,
    formState: { errors } } = useForm({
    defaultValues: async ()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()
      // این دیتا کل اون اطلاعاتی هستش که از فتچ ککردن میاد
      return{
        name: data.name,
        email: data.email,
        socials: {
          telegram: '@Joodi',
          instagram: '@Milad_Joodi'
        }
      }
    }
  })

  console.log("error=>", errors)

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
          {errors.name && errors.name.message}

          <input type="text" {...register('email', {
            required: "وارد کردن ایمیل الزامیست",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید"
            },
            maxLength: {
              value: 30,
              message: "حداکثر 30 کاراکتر وارد کنید"
            },
            pattern: {
              value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
              message: "فرمت ایمیل وارد شده اشتباه است"
            }
          })} placeholder="Email ..." />
          {errors.email && errors.email.message}

          <input type="text" {...register('socials.telegram', {
            
          })} placeholder="Telegram ..." />

          <input type="text" {...register('socials.instagram', {
            
          })} placeholder="Instagram ..." />

          <button type="submit">Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
}
