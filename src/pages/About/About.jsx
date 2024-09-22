import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./About.module.css";
import { data } from "../../data";
import BackToTopLink from "../../components/BackToTopLink/BackToTopLink";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function About() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <section
      className={`${styles.about} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <h2>{language === "de" ? "Über mich" : "Behind the scenes"}</h2>

      {language === "eng" && (
        <p className={styles.opener}>
          "Here, you'll discover a lot about me. Simply click on the headings to
          reveal more details. If you have any further questions, feel free to
          visit the {``}
          <Link to="/contact">contact</Link> page and reach out!"
        </p>
      )}

      {language === "de" && (
        <p className={styles.opener}>
          Hier wirst du viel über mich erfahren. Klicke einfach auf die
          Überschriften, um mehr Details zu sehen. Wenn du weitere Fragen hast,
          besuche gerne die {``}
          <Link to="/contact">Kontakt</Link>-Seite und melde dich bei mir!
        </p>
      )}
      {data.map((info, index) => (
        <details key={index} className={styles.infoWrapper}>
          <summary>
            <h3>{language === "de" ? info.titleDe : info.title}</h3>
          </summary>
          <p>{language === "de" ? info.infoDe : info.info}</p>
        </details>
      ))}
      <BackToTopLink />
    </section>
  );
}
