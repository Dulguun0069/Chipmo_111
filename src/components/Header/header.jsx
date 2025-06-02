import React, { useState } from "react";
import logo from '../../assets/logos/chipmo_logo.webp';
import { Link } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "mn");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <header className="header">
      <nav className="navContainer">
        <img src={logo} alt="logo" className="logo" />
        <div className="navLinks">
          <Link to="/"><li className="navItem">{t("home")}</li></Link>
          <Link to="/aboutRFID"><li className="navItem">{t("about_rfid")}</li></Link>
          <Link to="/system"><li className="navItem">{t("system")}</li></Link>
          <Link to="/product"><li className="navItem">{t("product")}</li></Link>
          <Link to="/rfidCalculator"><li className="navItem">{t("calculator")}</li></Link>
          <Link to="/contact"><li className="navItem">{t("contact")}</li></Link>
          
          <div>
            <button
              className={`MNEN ${language === "mn" ? "active" : ""}`}
              onClick={() => changeLanguage("mn")}
            >
              {t("lang_toggle")}
            </button>
            <button
            >
              {t("lang_toggle0")}
            </button>
            <button
              className={`MNEN ${language === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              {t("lang_toggle1")}
            </button>
          </div>
        </div>
        <button className="mobileMenuButton" aria-label="Toggle menu">
          <i className="menuIcon">☰</i>
        </button>
      </nav>
    </header>
  );
}
