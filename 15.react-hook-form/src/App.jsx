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
            required: true,
            minLength: 3,
            maxLength: 12
          })}
            placeholder="Name ..." />

          <input type="text" {...register('email', {
            required: true,
            minLength: 10,
            maxLength: 30
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
