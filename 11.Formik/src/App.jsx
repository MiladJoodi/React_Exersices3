import React, { useState } from "react";
import { useFormik } from "formik";

import "./App.css";

export default function App() {
  const form = useFormik({
    initialValues: { name: "", email: "" },

    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Inputs Data=>", values);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
    validate: (values) => {
      const errors = {};

      if (values.name === "") {
        errors.name = "وارد کردن نام اجباری می باشد";
      } else if (values.name.length < 4) {
        errors.name = "نام شما باید حداقل 4 کاراکتر باشد";
      }

      if (values.email === "") {
        errors.email = "وارد کردن ایمیل الزامیست";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "ایمیل وارد شده معتبر نیست";
      }

      return errors;
    },
  });

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={form.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.name && form.touched.name && <h2>{form.errors.name}</h2>}

          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.email && form.touched.email && <h2>{form.errors.email}</h2>}

          <button
            type="submit"
            className={form.isSubmitting ? "invalid-btn" : ""}
            disabled={form.isSubmitting}
          >
            {form.isSubmitting ? "Loading" : "Register"}
          </button>
          <p className="message">
            already registered? <a href="">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
