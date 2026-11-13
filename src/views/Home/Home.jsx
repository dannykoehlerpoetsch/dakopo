"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Home.module.css";
import Portrait from "../../assets/DAK.webp";

export default function Home() {
    const { darkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return (
        <section className={styles.home}>
            <div className={`${styles.content} ${darkMode ? styles.darkMode : styles.lightMode}`}>
                <h1>Danny Köhler-Poetsch</h1>
                <h2>
                    {language === "de"
                        ? "Frontendentwickler aus Leipzig · Next.js · Salesforce LWC · UI Engineering"
                        : "Frontend Developer in Leipzig, Germany · Next.js · Salesforce LWC · UI Engineering"}
                </h2>

                {language === "de" ? (
                    <>
                        <p>
                            Ich entwickle moderne, komponentenbasierte Webanwendungen mit
                            Next.js, React und TypeScript – von der semantischen Struktur
                            über CSS-Modules und Tailwind bis zu zugänglichen Interface-
                            Mustern. Im Beruf entwickle ich zusätzlich im Salesforce-
                            Umfeld: ich passe Standardkomponenten an kundenspezifische
                            Designs an und setze eigene Lightning Web Components mit SLDS
                            um.
                        </p>
                        <p>
                            Diese Portfolio-Seite zeigt meine Projekte, meinen Tech-Stack
                            und meinen beruflichen Hintergrund. Sie dokumentiert, wie ich
                            an Frontend-Aufgaben herangehe – von Anforderungen und
                            Technical Refinement über Umsetzung und Qualität bis zu Web
                            Performance und technischem SEO.
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            I build modern, component-based web applications with Next.js,
                            React and TypeScript – covering semantic structure, CSS Modules
                            and Tailwind, through to accessible interface patterns. In my
                            professional work I also develop within the Salesforce
                            ecosystem: I adapt standard components to customer-specific
                            designs and implement custom Lightning Web Components with SLDS.
                        </p>
                        <p>
                            This portfolio shows my projects, my tech stack and my
                            professional background. It documents how I approach frontend
                            work – from requirements and technical refinement through
                            implementation and quality to web performance and technical SEO.
                        </p>
                    </>
                )}
            </div>

            <div className={styles.image}>
                <Image
                    className={darkMode ? styles.darkMode : styles.lightMode}
                    src={Portrait}
                    alt={
                        language === "de"
                            ? "Portrait von Danny Köhler-Poetsch"
                            : "Portrait of Danny Köhler-Poetsch"
                    }
                    title="Danny Köhler-Poetsch"
                    priority
                    width={769}
                    height={2050}
                    sizes="(max-width: 768px) 90vw, 420px"
                    style={{ width: "auto", height: "75vh", borderRadius: "20px" }}
                />
            </div>
        </section>
    );
}