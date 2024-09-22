import React, { useEffect, useState, useContext } from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Published from "../../components/Published/Published";
import BackToTopLink from "../../components/BackToTopLink/BackToTopLink";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/dannykoehlerpoetsch/repos`
        );
        const fetchedData = await response.json();

        setRepos(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loaderWrapper}>
          <span className={styles.loader}></span>
        </div>
      ) : (
        <section
          className={`${styles.projectsWrapper} ${
            darkMode ? styles.darkMode : styles.lightMode
          }`}
        >
          <h2 className={styles.projectHeading}>
            {language === "de"
              ? "Repositories auf Github"
              : "See my Github Repositories"}
          </h2>
          {language === "de" ? (
            <p className={styles.projectOpener}>
              Hier sind meine auf GitHub publizierten Repositories, eingebunden
              über die GitHub-API. Schauen Sie sich gerne meinen Code der
              verschiedenen Projekte an. Um die veröffentlichten Projekte zu
              sehen, scrollen Sie einfach runter oder klicken{" "}
              <a href="#published">
                <b>hier</b>
              </a>{" "}
              .
            </p>
          ) : (
            <p className={styles.projectOpener}>
              Here you can see my repositories on GitHub, integrated via the
              GitHub API. Feel free to check out the code for each project.
              Scroll down to see my{" "}
              <a href="#published">
                <b>published</b>
              </a>{" "}
              projects.
            </p>
          )}
          <a
            href="https://github.com/dannykoehlerpoetsch"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <i className="fa-brands fa-github"></i> DannyKoehlerPoetsch
          </a>

          <ul className={styles.projectList}>
            {repos.map((repo, index) => (
              <li key={index}>
                <p>
                  <b>Name: </b>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </p>
                <p>
                  <b>{language === "de" ? "Beschreibung:" : "Description:"}</b>
                  <br />
                  {repo.description
                    ? repo.description
                    : "No description provided"}
                </p>
                <p>
                  <b>
                    {language === "de" ? "Programmiersprache:" : "Language:"}
                  </b>
                  <br />{" "}
                  {repo.language ? repo.language : "No language provided"}
                </p>
                <p>
                  <b>
                    {language === "de"
                      ? "letzte Aktualisierung:"
                      : "last update:"}
                    <br />
                  </b>{" "}
                  {repo.pushed_at}
                </p>
                <span>✨ ({repo.stargazers_count})</span>
              </li>
            ))}
          </ul>
          <BackToTopLink />
        </section>
      )}
      <Published />
    </>
  );
}
