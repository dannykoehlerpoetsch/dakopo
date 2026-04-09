"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation({ closeMenu, menuOpen }) {
  const links = [
    {
      path: "/",
      classname: "fa-solid fa-house",
      name: "Home",
      nameDe: "Start",
    },
    {
      path: "/about",
      classname: "fa-solid fa-circle-info",
      name: "About",
      nameDe: "Info",
    },
    {
      path: "/projects",
      classname: "fa-brands fa-github",
      name: "Projects",
      nameDe: "Projekte",
    },
    {
      path: "/contact",
      classname: "fa-solid fa-address-card",
      name: "Contact",
      nameDe: "Kontakt",
    },
  ];
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();

  return (
    <nav
      className={`${styles.nav} ${menuOpen ? styles.open : ""} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <ul
        className={`${styles.navList} ${
          darkMode ? styles.darkMode : styles.lightMode
        }`}
      >
        {links.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeMenu}
                className={isActive ? styles.activeLink : styles.link}
              >
                {language === "eng" ? link.name : link.nameDe}{" "}
                <i className={link.classname}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
