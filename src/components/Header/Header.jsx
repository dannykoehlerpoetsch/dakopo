"use client";

import { useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaGear } from "react-icons/fa6";
import * as Switch from "@radix-ui/react-switch";
import * as Popover from "@radix-ui/react-popover";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const headerRef = useRef(null);

  const t = (de, en) => (language === "de" ? de : en);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    };
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    updateHeight();
    return () => observer.disconnect();
  }, []);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${darkMode ? styles.darkMode : styles.lightMode}`}
      >
        <div className={styles.headerLogo}>
          <Link href="/">
            <span id="top">DaKoPo</span>
          </Link>
        </div>
        <Navigation
          closeMenu={closeMenu}
          menuOpen={menuOpen}
          onOpenSettings={() => setSettingsOpen(true)}
        />
        <button
          className={`${styles.burger} ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={
            menuOpen
              ? t("Menü schließen", "close menu")
              : t("Menü öffnen", "open menu")
          }
        >
          <FaBars aria-hidden="true" />
        </button>

        <Popover.Root open={settingsOpen} onOpenChange={setSettingsOpen}>
          <Popover.Trigger asChild>
            <button
              className={`${styles.settings} ${darkMode ? "dark-mode" : "light-mode"}`}
              aria-label={t("Einstellungen öffnen", "open settings")}
              title={t("Einstellungen", "Settings")}
            >
              <FaGear aria-hidden="true" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className={`${styles.settingsWrapper} ${darkMode ? styles.darkMode : styles.lightMode}`}
              side="bottom"
              align="end"
              sideOffset={4}
              collisionPadding={12}
              aria-label={t("Einstellungen", "Settings")}
              onOpenAutoFocus={(event) => {
                // Nicht das erste Element anspringen, sonst springt der Fokus
                // beim Oeffnen unvermittelt auf den Darkmode-Schalter.
                event.preventDefault();
              }}
            >
              <p>
                <b>{t("Einstellungen", "Settings")}</b>
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
                  aria-label={t("Darkmode umschalten", "Toggle dark mode")}
                >
                  <Switch.Thumb className={styles.switchThumb} />
                </Switch.Root>
              </div>
              <div className={styles.languageContainer}>
                <p>{t("Sprache:", "Language:")}</p>
                <button
                  onClick={() => {
                    switchLanguage("de");
                    setSettingsOpen(false);
                  }}
                  title="deutsch"
                  className={styles.langBtn}
                  aria-label={t(
                    "Sprache auf Deutsch umschalten",
                    "switch language to German",
                  )}
                >
                  <span className="fi fi-de" aria-hidden="true"></span>
                </button>
                <button
                  onClick={() => {
                    switchLanguage("en");
                    setSettingsOpen(false);
                  }}
                  title="english"
                  className={styles.langBtn}
                  aria-label={t(
                    "Sprache auf Englisch umschalten",
                    "switch language to English",
                  )}
                >
                  <span className="fi fi-gb" aria-hidden="true"></span>
                </button>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </header>
    </>
  );
}
