"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import * as Dialog from "@radix-ui/react-dialog";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Projects.module.css";
import { myProjects } from "../../data/links";

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [activeProject, setActiveProject] = useState(null);
  const [expandedInfo, setExpandedInfo] = useState({});

  const t = (de, en) => (language === "de" ? de : en);

  return (
    <section className={styles.linksSection}>
      <h2 id="published">
        {t("Meine veröffentlichten Projekte", "My published Projects")}
      </h2>
      <p className={styles.intro}>
        {t(
          "Hier finden Sie eine Auswahl meiner privaten Projekte. Sie können die Websites besuchen oder den Code direkt auf GitHub ansehen. Beruflich habe ich darüber hinaus weitere Projekte umgesetzt, die ich aus Datenschutzgründen hier leider nicht zeigen darf.",
          "Here you will find a selection of my personal projects. You can visit the websites or view the code on GitHub. In my professional career, I have completed more projects which I am unfortunately unable to showcase here for data protection reasons.",
        )}
      </p>

      <div className={styles.cardWrapper}>
        {myProjects.map((project, index) => {
          const title = language === "de" ? project.titleDe : project.title;
          const alt = language === "de" ? project.altDe : project.alt;
          const isExpanded = Boolean(expandedInfo[index]);

          return (
            // Ein Root pro Karte: Radix legt den Fokus sonst auf den zuletzt
            // registrierten Trigger aller Karten, nicht auf den ausgelösten.
            <Dialog.Root
              key={project.github}
              open={activeProject === index}
              onOpenChange={(open) =>
                setActiveProject(open ? index : null)
              }
            >
              <div
                className={`${styles.card} ${
                  darkMode ? styles.darkMode : styles.lightMode
                }`}
              >
                <div className={styles.cardImage}>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className={styles.imageButton}
                      aria-label={t(
                        `Bild vergrößern: ${title}`,
                        `Enlarge image: ${title}`,
                      )}
                      title={t("Bild vergrößern", "click to enlarge image")}
                    >
                      <Image
                        src={project.src}
                        alt={alt}
                        width={1600}
                        height={900}
                        sizes="(max-width: 768px) 88vw, 460px"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </button>
                  </Dialog.Trigger>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>
                    {language === "de" ? project.categoryDe : project.category}
                  </span>
                  <h3>{title}</h3>
                  <ul className={styles.highlights}>
                    {(language === "de"
                      ? project.technicalHighlightsDe
                      : project.technicalHighlights
                    ).map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={styles.readMoreBtn}
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedInfo((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  >
                    {isExpanded
                      ? t("Weniger anzeigen", "Show less")
                      : t("Mehr erfahren", "Read more")}
                  </button>
                  {isExpanded && (
                    <p className={styles.infoText}>
                      {language === "de" ? project.infoDe : project.info}
                    </p>
                  )}
                  <div className={styles.stackBadges}>
                    {(language === "de" ? project.stackDe : project.stack).map(
                      (tech, i) => (
                        <span key={i} className={styles.badge}>
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className={styles.cardLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(
                        `Quellcode von ${title} auf GitHub`,
                        `Source code of ${title} on GitHub`,
                      )}
                      title={t("auf GitHub ansehen", "watch on github")}
                      className={styles.linkToGithub}
                    >
                      <FaSquareGithub aria-hidden="true" />
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t(
                        `${project.titleDe} besuchen`,
                        `visit ${project.title}`,
                      )}
                    >
                      {t("jetzt ansehen", "visit")}
                    </a>
                  </div>
                </div>
              </div>

              <Dialog.Portal>
                <Dialog.Overlay className={styles.modalOverlay} />
                <Dialog.Content className={styles.modalContent}>
                  <Dialog.Close
                    type="button"
                    className={styles.closeButton}
                    aria-label={t("Dialog schließen", "close dialog")}
                    title={t("Schließen", "close")}
                  >
                    <span aria-hidden="true">×</span>
                  </Dialog.Close>
                  <Dialog.Title className={styles.modalTitle}>
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    {t(`Vergrößerte Ansicht: ${alt}`, `Enlarged view: ${alt}`)}
                  </Dialog.Description>
                  <Image
                    src={project.src}
                    alt={alt}
                    className={styles.modalImage}
                    width={1600}
                    height={900}
                    sizes="(max-width: 1100px) 92vw, 1100px"
                    loading="eager"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          );
        })}
      </div>
    </section>
  );
}
