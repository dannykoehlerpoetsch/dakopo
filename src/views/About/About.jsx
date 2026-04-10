"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./About.module.css";
import { data } from "../../data/data";
import AccordionList from "../../components/AccordionList/AccordionList";
import Link from "next/link";

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
            This section offers a closer look at my background, skills and the way I approach my work.
            If you would like to get in touch or have any questions, feel free to visit the{" "}
            <Link href="/contact">contact</Link> page.
          </p>
      )}

      {language === "de" && (
          <p className={styles.opener}>
            In diesem Bereich erhalten Sie einen Einblick in meinen Hintergrund, meine Fähigkeiten
            und meine Arbeitsweise. Wenn Sie Fragen haben oder Kontakt aufnehmen möchten,
            besuchen Sie gerne die{" "}
            <Link href="/contact">Kontakt</Link>-Seite.
          </p>
      )}

      <AccordionList items={data} />

    </section>
  );
}
