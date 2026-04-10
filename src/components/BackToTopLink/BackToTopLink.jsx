"use client";

import React, { useState, useEffect } from "react";
import { FaCircleUp } from "react-icons/fa6";
import styles from "./BackToTopLink.module.css";

export default function BackToTopLink() {
  const [visible, setVisible] = useState(false);

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
      title="back to top"
      className={`${styles.backToTopLink} ${visible ? styles.visible : ""}`}
      aria-label="Back to top"
    >
      <FaCircleUp aria-hidden="true" />
    </button>
  );
}
