"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark, FaGear } from "react-icons/fa6";
import * as Switch from "@radix-ui/react-switch";
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
          <Link href="/">
            <span id="top">DaKoPo</span>
          </Link>
        </div>
        <Navigation closeMenu={closeMenu} menuOpen={menuOpen} toggleSettings={toggleSettings} />
        <button
          className={`${styles.burger} ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <button
          className={`${styles.settings} ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          onClick={toggleSettings}
          title={language === "de" ? "Einstellungen öffnen" : "open settings"}
        >
          <FaGear aria-hidden="true" />
        </button>
      </header>

      {settings && (
        <div
          className={styles.settingsBackdrop}
          onClick={closeSettings}
          aria-hidden="true"
        />
      )}
      <div
        className={`${styles.settingsWrapper} ${
          settings ? styles.openSettings : ""
        } ${darkMode ? styles.darkMode : styles.lightMode}`}
      >
        <p>
          <b>{language === "de" ? "Einstellungen" : "Settings"}</b>
        </p>
        <div className={styles.darkModeContainer}>
          <label className={styles.darkModeLabel} htmlFor="darkmode-switch">
            Darkmode:
          </label>
          <Switch.Root
            id="darkmode-switch"
            className={styles.switchRoot}
            checked={darkMode}
            onCheckedChange={handleDarkMode}
            aria-label="Toggle dark mode"
          >
            <Switch.Thumb className={styles.switchThumb} />
          </Switch.Root>
        </div>
        <div className={styles.languageContainer}>
          <p>{language === "de" ? "Sprache:" : "Language:"}</p>
          <button
            onClick={() => {
              switchLanguage("de");
              closeSettings();
            }}
            title="deutsch"
            className={styles.langBtn}
            aria-label="Sprache auf Deutsch umschalten"
          >
            <span className="fi fi-de" aria-hidden="true"></span>
          </button>
          <button
            onClick={() => {
              switchLanguage("eng");
              closeSettings();
            }}
            title="english"
            className={styles.langBtn}
            aria-label="Switch language to English"
          >
            <span className="fi fi-gb" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  );
}
