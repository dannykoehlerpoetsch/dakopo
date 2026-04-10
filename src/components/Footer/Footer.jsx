"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <span>&copy; by DaKoPo {year}</span>
      <nav className={styles.footerNav} aria-label="Footer navigation">
        <Link href="/imprint">
          {language === "de" ? "Impressum & Datenschutz" : "Imprint & Privacy"}
        </Link>
      </nav>
    </footer>
  );
}
