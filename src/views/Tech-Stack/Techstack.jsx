"use client";

import React, { useContext } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Techstack.module.css";
import TechLight from "../../assets/Tech-Stack-light.png";
import TechDark from "../../assets/Tech-Stack-dark.png";

const technologies = [
  {
    title: "MongoDB",
    info: "A NoSQL document database that stores data in flexible, JSON-like documents. It is well-suited for applications with dynamic schemas and large amounts of unstructured data.",
    infoDe: "Eine NoSQL-Dokumentendatenbank, die Daten in flexiblen, JSON-ähnlichen Dokumenten speichert. Sie eignet sich besonders für Anwendungen mit dynamischen Schemas und großen Mengen unstrukturierter Daten.",
  },
  {
    title: "Express.js",
    info: "A minimal and flexible Node.js web framework for building APIs and web applications. It provides routing, middleware support, and a simple interface for handling HTTP requests.",
    infoDe: "Ein minimales und flexibles Node.js-Webframework zum Erstellen von APIs und Webanwendungen. Es bietet Routing, Middleware-Unterstützung und eine einfache Schnittstelle für HTTP-Anfragen.",
  },
  {
    title: "Node.js",
    info: "A JavaScript runtime built on Chrome's V8 engine that enables server-side development. It allows building scalable backend services and APIs with JavaScript.",
    infoDe: "Eine JavaScript-Laufzeitumgebung basierend auf Chromes V8-Engine für serverseitige Entwicklung. Damit lassen sich skalierbare Backend-Services und APIs in JavaScript erstellen.",
  },
  {
    title: "Next.js",
    info: "A React framework that provides server-side rendering, static site generation, and file-based routing. It simplifies building production-ready, performant web applications.",
    infoDe: "Ein React-Framework mit Server-Side Rendering, statischer Seitengenerierung und dateibasiertem Routing. Es vereinfacht die Erstellung performanter, produktionsreifer Webanwendungen.",
  },
  {
    title: "React",
    info: "A JavaScript library for building user interfaces with reusable components. It uses a virtual DOM for efficient updates and is widely adopted in modern frontend development.",
    infoDe: "Eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen mit wiederverwendbaren Komponenten. Sie nutzt ein virtuelles DOM für effiziente Updates und ist im modernen Frontend weit verbreitet.",
  },
  {
    title: "HTML5",
    info: "The standard markup language for structuring web content. HTML5 introduces semantic elements, multimedia support, and APIs that enable modern, accessible websites.",
    infoDe: "Die Standard-Auszeichnungssprache zur Strukturierung von Webinhalten. HTML5 bietet semantische Elemente, Multimedia-Unterstützung und APIs für moderne, barrierefreie Websites.",
  },
  {
    title: "CSS3",
    info: "The styling language for designing the look and layout of web pages. CSS3 adds animations, flexbox, grid layout, and responsive design capabilities.",
    infoDe: "Die Gestaltungssprache für das Aussehen und Layout von Webseiten. CSS3 bietet Animationen, Flexbox, Grid-Layout und Möglichkeiten für responsives Design.",
  },
  {
    title: "JavaScript",
    info: "A versatile programming language that powers interactive web applications. It runs in the browser and on the server, making it a core technology for modern web development.",
    infoDe: "Eine vielseitige Programmiersprache für interaktive Webanwendungen. Sie läuft im Browser und auf dem Server und ist eine Kerntechnologie der modernen Webentwicklung.",
  },
  {
    title: "Tailwind CSS",
    info: "A utility-first CSS framework that allows rapid UI development by composing styles directly in HTML using predefined classes.",
    infoDe: "Ein Utility-First CSS-Framework, das schnelle UI-Entwicklung ermöglicht, indem Styles direkt im HTML über vordefinierte Klassen zusammengesetzt werden.",
  },
  {
    title: "Salesforce",
    info: "A leading cloud-based CRM platform. I develop standard and custom Lightning Web Components (LWC) using the Salesforce Lightning Design System (SLDS).",
    infoDe: "Eine führende cloudbasierte CRM-Plattform. Ich entwickle Standard- und Custom Lightning Web Components (LWC) mithilfe des Salesforce Lightning Design Systems (SLDS).",
  },
  {
    title: "SASS",
    info: "A CSS preprocessor that extends CSS with variables, nesting, mixins, and functions – making stylesheets more maintainable and organized.",
    infoDe: "Ein CSS-Präprozessor, der CSS um Variablen, Verschachtelung, Mixins und Funktionen erweitert – für besser wartbare und strukturierte Stylesheets.",
  },
];

export default function Techstack() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.techstack}>
      <h2>{language === "de" ? "Mein Tech-Stack" : "My Tech Stack"}</h2>
      <p className={styles.intro}>
        {language === "de"
          ? "Hier ist ein Überblick über die Technologien, mit denen ich arbeite."
          : "Here is an overview of the technologies I work with."}
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src={darkMode ? TechDark : TechLight}
          alt={language === "de" ? "Mein Tech-Stack" : "My Tech Stack"}
          width={1000}
          height={600}
          sizes="(max-width: 768px) 90vw, 900px"
          quality={75}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
      <Accordion.Root type="multiple" className={styles.accordionRoot}>
        {technologies.map((tech, index) => (
          <Accordion.Item key={index} value={`item-${index}`} className={styles.accordionItem}>
            <Accordion.Header asChild>
              <h3>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  <span className={styles.chevron} aria-hidden="true">▶</span>
                  {tech.title}
                </Accordion.Trigger>
              </h3>
            </Accordion.Header>
            <Accordion.Content className={styles.accordionContent}>
              <p>{language === "de" ? tech.infoDe : tech.info}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}