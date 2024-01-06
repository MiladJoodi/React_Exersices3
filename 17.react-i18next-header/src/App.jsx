import React from "react";
import "./App.css";

import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="bg-img-box">
        <img
          src="/images/slider-left-dec.png"
          alt="bg img "
          className="bg-img"
        />
      </div>

      <div className="u-container">
        <nav className="navbar">
          <div className="navbar-logo-box">
            <img
              src="/images/logo.png"
              alt="logo site"
              className="navbar-log-img"
            />
          </div>

          <ul className="navbar-list">
            <li className="navbar-link">خانه</li>
            <li className="navbar-link">خدمات</li>
            <li className="navbar-link">درباره ما</li>
            <li className="navbar-link">قیمت ها</li>
            <li className="navbar-link">خبر نامه</li>
            <div className="switch">
              <input
                id="language-toggle"
                className="check-toggle check-toggle-round-flat"
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    i18n.changeLanguage("en");
                  } else {
                    i18n.changeLanguage("fa");
                  }
                }}
              />
              <label htmlFor="language-toggle"></label>
              <span className="on">FA</span>
              <span className="off">EN</span>
            </div>
          </ul>

          <button className="btn btn-gradient">{t("register")}</button>

          <div className="navbar-menu">
            <svg className="icon icon-menu">
              <use xlinkHref="./fonts/sprite.svg#icon-menu"></use>
            </svg>
          </div>
        </nav>
      </div>

      <div className="header-content u-container">
        <div className="header-right-content">
          <img
            src="/images/slider-dec.png"
            alt="bg img"
            className="header-right-content-img"
          />
        </div>

        <div className="header-left-content">
          <h1 className="header-title">
            <span>{t("firstTitle")}</span>
            <span>{t("secondTitle")}</span>
          </h1>

          <p className="u-paragraph">{t("desc")}</p>

          <div className="btns">
            <button className="btn btn-green">{t("googlePlay")}</button>
            <button className="btn btn-ice">{t("appleStore")}</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
