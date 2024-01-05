import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

export default function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const formSubmitting = (data) => {
    console.log("Data =>", data);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit(formSubmitting)}>
          <input type="text" {...register("name")} placeholder="Name ..." />

          <input type="text" {...register("email")} placeholder="Email ..." />

          <button type="submit">Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
