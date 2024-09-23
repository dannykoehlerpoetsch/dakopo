import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Published.module.css";
import { myProjects } from "../../links";
import BackToTopLink from "../BackToTopLink/BackToTopLink";
export default function Links() {
  const { darkMode } = useContext(ThemeContext);
  const [showImage, setShowImage] = useState(null);
  const { language } = useContext(LanguageContext);

  const openModal = (src) => {
    setShowImage(src);
  };
  const closeModal = () => {
    setShowImage(null);
  };

  return (
    <section className={styles.linksSection}>
      <h2 id="published">
        {language === "de"
          ? "Meine veröffentlichten Projekte"
          : "My published Projects"}
      </h2>
      <p className={styles.intro}>
        {language === "de"
          ? "Hier finden Sie einen Überblick über meine veröffentlichten Projekte. Sie können die Websites besuchen oder den Code direkt auf GitHub ansehen,  um sich einen Eindruck von meiner Arbeit zu verschaffen."
          : "Here you will find an overview of my published projects, and you can visit the websites or watch the code on Github to get an impression of my work."}
      </p>

      <div className={styles.cardWrapper}>
        {myProjects.map((project, index) => (
          <div
            className={`${styles.card} ${
              darkMode ? styles.darkMode : styles.lightMode
            }`}
            key={index}
          >
            <div className={styles.cardImage}>
              <img
                src={project.src}
                alt={language === "de" ? project.altDe : project.alt}
                onClick={() => openModal(project.src)}
                title="clik to show large image"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{language === "de" ? project.titleDe : project.title}</h3>
              <p>{language === "de" ? project.infoDe : project.info}</p>
              <div className={styles.cardLinks}>
                <a
                  href={project.github}
                  title={
                    language === "de" ? "auf GitHub ansehen" : "watch on github"
                  }
                  target="_blank"
                  className={styles.linkToGithub}
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={
                    language === "de"
                      ? `${project.titleDe} besuchen`
                      : `visit ${project.title}`
                  }
                >
                  {language === "de" ? "jetzt ansehen" : "visit"}
                </a>
              </div>
            </div>
          </div>
        ))}

        {showImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeModal}
                title="close"
              >
                X
              </button>
              <img
                src={showImage}
                alt="Selected"
                className={styles.modalImage}
              />
            </div>
          </div>
        )}
      </div>

      <BackToTopLink />
    </section>
  );
}
