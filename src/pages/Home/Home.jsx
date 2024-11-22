import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Home.module.css";
import Portrait from "../../assets/danny-start.webp";
import Mern from "../../assets/MERN-logo.png";
import Praktikum from "../../components/Praktikum/Praktikum";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <section className={styles.home}>
      <div className={styles.news}>
        <Praktikum />
      </div>
      <div className={styles.content}>
        <h1>Danny Köhler-Poetsch</h1>
        <h2>{language === "de" ? "Softwareentwickler" : "Web Developer"}</h2>
        <p>Leipzig{language === "de" ? "" : ", Germany"}</p>
        <a
          href="/lebenslauf_danny_koehler-poetsch.pdf"
          download="lebenslauf_danny_koehler-poetsch.pdf"
          className={styles.downloadCV}
        >
          {language === "de" ? "Lebenslauf herunterladen" : "Download CV"}
        </a>
        <div className={styles.contentLogo}>
          <img src={Mern} alt="mern-stack logo" />
        </div>
      </div>
      <div className={styles.image}>
        <img
          className={darkMode ? styles.darkMode : styles.lightMode}
          src={Portrait}
          alt="Picture from Danny Köhler-Poetsch"
          title="Hi, I'm Danny Köhler-Poetsch!"
          loading="eager"
        />
      </div>
    </section>
  );
}
