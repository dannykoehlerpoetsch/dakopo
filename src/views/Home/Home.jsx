"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Home.module.css";
import Portrait from "../../assets/danny-start.webp";

export default function Home() {
    const { darkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return (
        <section className={styles.home}>
            <div className={`${styles.content} ${darkMode ? styles.darkMode : styles.lightMode}`}>
                <h1>Danny Köhler-Poetsch</h1>
                <h2>
                    {language === "de"
                        ? "Frontendentwickler aus Leipzig"
                        : "Frontend Developer based in Leipzig, Germany"}
                </h2>

                {language === "de" ? (
                    <>
                        <p>
                            Ich bin Frontendentwickler mit Schwerpunkt auf moderner,
                            komponentenbasierter Webentwicklung und entwickle performante,
                            wartbare und benutzerfreundliche Webanwendungen mit React,
                            Next.js und JavaScript. In meinem beruflichen Alltag arbeite ich
                            außerdem im Salesforce-Umfeld und verbinde technische Präzision
                            mit einem klaren Blick für Struktur, saubere Umsetzung und
                            nachhaltige Frontend-Architekturen.
                        </p>
                        <p>
                            Diese Portfolio-Website gibt Einblick in meine Projekte, meinen
                            Tech-Stack und meinen beruflichen Hintergrund. Sie zeigt, wie ich
                            an moderne Webentwicklung herangehe, mit welchen Technologien ich
                            arbeite und worauf ich bei Qualität, Performance und
                            Weiterentwicklung besonderen Wert lege.
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            I am a frontend developer focused on modern, component-based web
                            development, building performant, maintainable and user-friendly
                            web applications with React, Next.js and JavaScript. In my
                            professional work, I also develop within the Salesforce ecosystem
                            and combine technical precision with a strong focus on structure,
                            clean implementation and sustainable frontend architecture.
                        </p>
                        <p>
                            This portfolio website provides insight into my projects, tech
                            stack and professional background. It is designed to show how I
                            approach modern web development, which technologies I work with
                            and what I value when it comes to quality, performance and
                            continuous improvement.
                        </p>
                    </>
                )}
            </div>

            <div className={styles.image}>
                <Image
                    className={darkMode ? styles.darkMode : styles.lightMode}
                    src={Portrait}
                    alt="Portrait of Danny Köhler-Poetsch"
                    title="Danny Köhler-Poetsch"
                    priority
                    width={400}
                    height={600}
                    style={{ width: "auto", height: "75vh", borderRadius: "20px" }}
                />
            </div>
        </section>
    );
}