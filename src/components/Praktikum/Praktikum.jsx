import React, { useContext } from "react";
import styles from "./Praktikum.module.css";
import { LanguageContext } from "../../context/LanguageContext";

export default function Praktikum() {
  const { language } = useContext(LanguageContext);
  return (
    <aside className={styles.internshipWrapper}>
      <h2>
        {language === "de"
          ? "Praktikumsplatz gesucht!"
          : "Looking for an Internship!"}
      </h2>

      <p>
        {language === "de"
          ? "Ich suche im Zeitraum 06.02.2025 bis 02.04.2025 einen Praktikumsplatz in Leipzig und Umgebung.Der Schwerpunkt meines Praktikumsinteresses liegt auf dem MERN-Stack (MongoDB, Express.js, React, Node.js).Falls Sie eine passende Stelle anbieten oder jemanden kennen, freue ich mich über Ihre Kontaktaufnahme!"
          : "I am seeking an internship position in Leipzig and surrounding areas from February 6, 2025 to April 2, 2025. My main area of interest is the MERN stack (MongoDB, Express.js, React, Node.js).If you have a suitable position or know someone who does, I would greatly appreciate your contact!"}
      </p>
    </aside>
  );
}
