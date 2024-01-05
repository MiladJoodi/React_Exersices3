import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./App.css";

export default function App() {
  return (
    <div className="login-page">
      <div className="form">
        <Formik
        validate={(values)=>{
          const errors = {}

          if(values.name === ''){
            errors.name = 'وارد کردن نام اجباری می باشد'
          } else if (values.name.length<4){
            errors.name = "نام شما باید حداقل 4 کاراکتر باشد"
          }

          if(values.email === ''){
            errors.email = 'وارد کردن ایمیل الزامیست'
          }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'ایمیل وارد شده معتبر نیست'
          }
          

          return errors
        }}
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => {
            console.log("Form Inputs Data=>", values);
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
              <Form className="login-form">
                {console.log(touched)}
                <Field type="text" name="name" placeholder="Name..." />
                {/* {errors.name && touched.name && <h2>{errors.name}</h2>} */}
                <ErrorMessage name="name" component="h1" />
                <Field type="email" name="email" placeholder="Email..." />
                <ErrorMessage name="email" component="h1" />
                {/* {errors.email && touched.email && errors.email} */}
                <button type="submit">Register</button>
                <p className="message">
                already registered? <a href="">Sign In</a>
              </p>
              </Form>
              
          )}
        </Formik>
      </div>
    </div>
  );
}
