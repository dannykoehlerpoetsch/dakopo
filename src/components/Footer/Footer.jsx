"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>&copy; by DaKoPo {year}</span>
      <nav
        className={styles.footerNav}
        aria-label={
          language === "de" ? "Navigation im Fußbereich" : "Footer navigation"
        }
      >
        <Link href="/imprint">
          {language === "de" ? "Impressum & Datenschutz" : "Imprint & Privacy"}
        </Link>
      </nav>
    </footer>
  );
}
