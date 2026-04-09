"use client";

import React, { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./About.module.css";
import { data } from "../../data";
import BackToTopLink from "../../components/BackToTopLink/BackToTopLink";
import { LanguageContext } from "../../context/LanguageContext";
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
          Here, you'll discover a lot about me. Simply click on the headings to
          reveal more details. If you have any further questions, feel free to
          visit the {``}
          <Link href="/contact">contact</Link> page and reach out!
        </p>
      )}

      {language === "de" && (
        <p className={styles.opener}>
          Hier erfahren Sie einiges über mich. Klicken Sie einfach auf die
          Überschriften, um mehr Details zu sehen. Wenn Sie weitere Fragen
          haben, besuchen Sie gerne die {``}
          <Link href="/contact">Kontakt</Link>-Seite und melden sich bei mir!
        </p>
      )}

      <Accordion.Root type="multiple" className={styles.accordionRoot}>
        {data.map((info, index) => (
          <Accordion.Item key={index} value={`item-${index}`} className={styles.accordionItem}>
            <Accordion.Header asChild>
              <h3>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  <span className={styles.chevron} aria-hidden="true">▶</span>
                  {language === "de" ? info.titleDe : info.title}
                </Accordion.Trigger>
              </h3>
            </Accordion.Header>
            <Accordion.Content className={styles.accordionContent}>
              <p>{language === "de" ? info.infoDe : info.info}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <BackToTopLink />
    </section>
  );
}
