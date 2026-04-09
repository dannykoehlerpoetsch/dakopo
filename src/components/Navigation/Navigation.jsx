"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHouse, FaCircleInfo, FaGithub, FaAddressCard, FaGear, FaCubesStacked } from "react-icons/fa6";
import styles from "./Navigation.module.css";

export default function Navigation({ closeMenu, menuOpen, toggleSettings }) {
  const links = [
    {
      path: "/",
      icon: <FaHouse />,
      name: "Home",
      nameDe: "Start",
    },
    {
      path: "/about",
      icon: <FaCircleInfo />,
      name: "About",
      nameDe: "Info",
    },
    {
      path: "/projects",
      icon: <FaGithub />,
      name: "Projects",
      nameDe: "Projekte",
    },
    {
      path: "/tech-stack",
      icon: <FaCubesStacked />,
      name: "Technologies",
      nameDe: "Technologien",
    },
    {
      path: "/contact",
      icon: <FaAddressCard />,
      name: "Contact",
      nameDe: "Kontakt",
    },
  ];
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();

  return (
    <>
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
      <nav
        className={`${styles.nav} ${menuOpen ? styles.open : ""} ${
          darkMode ? styles.darkMode : styles.lightMode
        }`}
        role="navigation"
        aria-label="Main navigation"
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
                  aria-current={isActive ? "page" : undefined}
                >
                  {language === "eng" ? link.name : link.nameDe}{" "}
                  <span aria-hidden="true">{link.icon}</span>
                </Link>
              </li>
            );
          })}
          <li className={styles.settingsItem}>
            <button
              className={styles.link}
              onClick={() => {
                closeMenu();
                toggleSettings();
              }}
            >
              {language === "de" ? "Einstellungen" : "Settings"}{" "}
              <span aria-hidden="true"><FaGear /></span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
