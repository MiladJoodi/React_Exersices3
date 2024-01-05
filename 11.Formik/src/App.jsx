import React, { useState } from "react";
import { Formik } from "formik";

import "./App.css";

export default function App() {
  return (
    <div className="login-page">
      <div className="form">
        <Formik
          initialValues={{ name: "", email: "" }}
        >
          {(values) => {
            <form className="login-form delete">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name..." />

              <input type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email..." />

              <button>Register</button>
              <p className="message">
                already registered? <a href="">Sign In</a>
              </p>
            </form>
          }}

        </Formik>
      </div>
    </div>
  );
}
