import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import "./App.css";

export default function App() {
  return (
    <div className="login-page">
      <div className="form">
        <Formik
          initialValues={
            { name: "Milad", email: "Milad@gmail.com" }}
            onSubmit={(values)=>{
              console.log("Form Inputs Data=>", values);
            }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="login-form delete" onSubmit={handleSubmit}>
              {/* <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name..."
              /> */}

              <Field type="text" name="name" placeholder="Name..." />


              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email..."
              />

              <button>Register</button>
              <p className="message">
                already registered? <a href="">Sign In</a>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
