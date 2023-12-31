import React, { useState } from "react";

import "./App.css";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://react20libs-default-rtdb.firebaseio.com/users.json", {
        data: {
          name,
          email,
        },
        headers: {
          // Codes
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("ثبت نام با موفقیت انجام شد");
        }
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="Name ..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email ..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={registerHandler}>Register</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
