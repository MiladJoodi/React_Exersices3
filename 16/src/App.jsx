import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import "./App.css";

export default function App() {

  const { t } = useTranslation();

  const changeLanguage = (event)=>{
    console.log(event.target.value)
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="Name ..." />
          <input type="text" placeholder="Email ..." />
          <button type="submit">{t("register")}</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <hr />
        <select onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="tr">Turkish</option>
          <option value="fa">Persian</option>
        </select>
      </div>
    </div>
  );
}
