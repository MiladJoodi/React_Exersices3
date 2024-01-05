import React, { useState } from "react";
import { useFormik } from "formik";
import registerSchema from "./Validations/register";

import "./App.css";

export default function App() {
  const form = useFormik({
    initialValues: { name: "", email: "" },

    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Inputs Data =>", values);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },

    validationSchema: registerSchema,
  });

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={form.handleSubmit} className="login-form">
          <input
            type="text"
            name="name"
            placeholder="Name ..."
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.name && form.touched.name && form.errors.name}

          <input
            type="text"
            name="email"
            placeholder="Email ..."
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />

          {form.errors.email && form.touched.email && form.errors.email}
          <button
            type="submit"
            className={form.isSubmitting ? "invalid-btn" : ""}
            disabled={form.isSubmitting}
          >
            {form.isSubmitting ? "Loading ..." : "Register"}
          </button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
