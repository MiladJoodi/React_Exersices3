import React, { useState } from "react";
import registerSchema from "./Validations/register";
import "./App.css";

export default function App() {

  const [errors, setErrors] = useState()

  const handleSubmit = async (event)=>{
    event.preventDefault();
    
    const newUser = {
      name: event.target[0].value,
      email: event.target[1].value
    };
    try{
      const isValid = await registerSchema.validate(newUser, {
        abortEarly: false,
      });
      console.log(isValid)
    }catch(err){
      let errors = err.inner.reduce((acc, err)=> ({
        ...acc,
        [err.path]: err.message
      }), {})
      console.log(errors)
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name ..." />
          <input type="email" name="email" placeholder="Email ..." />
          <button type="submit">Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
