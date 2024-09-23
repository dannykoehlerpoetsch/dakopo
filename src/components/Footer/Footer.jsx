import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      &copy; by DaKoPo {year}
    </footer>
  );
}
