import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from "./i18n";

import "./App.css";

export default function App() {

  const { t } = useTranslation();

  console.log(i18n.language)

  const changeLanguage = (event)=>{
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className={`login-page ${i18n.language === "fa" ? "rtl" : null}`}>
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
