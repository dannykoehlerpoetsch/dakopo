"use client";

import React, { useState, useEffect, useContext } from "react";
import { FaCircleUp } from "react-icons/fa6";
import styles from "./BackToTopLink.module.css";
import { LanguageContext } from "../../context/LanguageContext";

export default function BackToTopLink() {
  const [visible, setVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      title={language === "de" ? "Zurück nach oben" : "back to top"}
      className={`${styles.backToTopLink} ${visible ? styles.visible : ""}`}
      aria-label={language === "de" ? "Zurück nach oben" : "Back to top"}
    >
      <FaCircleUp aria-hidden="true" />
    </button>
  );
}
