import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSettings = () => {
    setSettings((prevState) => !prevState);
  };

  const closeSettings = () => {
    setSettings(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <NavLink to="/">
            <span id="top">DaKoPo</span>
          </NavLink>
        </div>
        <Navigation closeMenu={closeMenu} menuOpen={menuOpen} />
        <div
          className={`${styles.burger} ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          onClick={() => toggleMenu()}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <button
          className={`${styles.settings} ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          onClick={toggleSettings}
          title={language === "de" ? "Einstellungen öffnen" : "open settings"}
        >
          <i className="fa-solid fa-gear"></i>
        </button>
      </header>

      <div
        className={`${styles.settingsWrapper} ${
          settings ? styles.openSettings : ""
        } ${darkMode ? styles.darkMode : styles.lightMode}`}
      >
        <p>
          <b>{language === "de" ? "Einstellungen" : "Settings"}</b>
        </p>
        <div>
          <p>Darkmode:</p>
          <button
            onClick={() => {
              handleDarkMode();
              closeSettings();
            }}
            className={styles.themeToggler}
            title={`switch to ${darkMode ? "lightmode" : "darkmode"}`}
          >
            {darkMode
              ? language === "eng"
                ? "turn off"
                : "ausschalten"
              : language === "eng"
              ? "turn on"
              : "einschalten"}
          </button>
        </div>
        <div>
          <p>{language === "de" ? "Sprache:" : "Language:"}</p>
          <span
            onClick={() => {
              switchLanguage("de");
              closeSettings();
            }}
            title="deutsch"
          >
            🇩🇪
          </span>
          <span
            onClick={() => {
              switchLanguage("eng");
              closeSettings();
            }}
            title="english"
          >
            🇬🇧
          </span>
        </div>
      </div>
    </>
  );
}
