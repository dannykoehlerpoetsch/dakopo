"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Techstack.module.css";
import AccordionList from "../../components/AccordionList/AccordionList";
import TechLight from "../../assets/Tech-Stack-light.png";
import TechDark from "../../assets/Tech-Stack-dark.png";

const dailyWorkTechnologies = [
  {
    title: "JavaScript",
    info: "JavaScript is one of the core technologies in my day-to-day work. I use it to build interactive frontend features, structure application logic and create maintainable solutions across different web projects.",
    infoDe:
        "JavaScript gehört zu den zentralen Technologien in meinem Arbeitsalltag. Ich nutze es, um interaktive Frontend-Funktionen umzusetzen, Anwendungslogik zu strukturieren und wartbare Lösungen in unterschiedlichen Webprojekten zu entwickeln.",
  },
  {
    title: "React",
    info: "React is one of the main libraries I work with when building modern user interfaces. I use it to create reusable components, structure frontend applications and develop scalable UI solutions.",
    infoDe:
        "React ist eine der wichtigsten Bibliotheken in meiner täglichen Arbeit an modernen Benutzeroberflächen. Ich nutze es, um wiederverwendbare Komponenten zu entwickeln, Frontend-Anwendungen zu strukturieren und skalierbare UI-Lösungen umzusetzen.",
  },
  {
    title: "Next.js",
    info: "I use Next.js to build modern React applications with a strong focus on performance, routing and maintainable project structure. It is especially valuable when creating production-ready web applications with a clean developer experience.",
    infoDe:
        "Ich nutze Next.js, um moderne React-Anwendungen mit Fokus auf Performance, Routing und wartbare Projektstrukturen zu entwickeln. Besonders wertvoll ist es für die Umsetzung produktionsreifer Webanwendungen mit einer klaren Developer Experience.",
  },
  {
    title: "HTML5",
    info: "HTML5 forms the structural foundation of every web interface. I use it to build semantic, well-structured and accessible page layouts as the basis for maintainable frontend development.",
    infoDe:
        "HTML5 bildet die strukturelle Grundlage jeder Weboberfläche. Ich setze es ein, um semantische, klar aufgebaute und zugängliche Seitenstrukturen als Basis für wartbare Frontendentwicklung zu erstellen.",
  },
  {
    title: "CSS3",
    info: "CSS3 is part of my daily frontend work whenever it comes to layout, visual presentation and responsive behavior. I use it to build clean, adaptable interfaces with a strong focus on usability.",
    infoDe:
        "CSS3 gehört zu meiner täglichen Frontend-Arbeit, wenn es um Layout, visuelle Gestaltung und responsives Verhalten geht. Ich nutze es, um saubere und anpassungsfähige Oberflächen mit Fokus auf Benutzerfreundlichkeit umzusetzen.",
  },
  {
    title: "SASS",
    info: "I use SASS to structure styles more efficiently and keep larger stylesheets organized. Features such as variables, nesting and reusable patterns help me build maintainable styling systems.",
    infoDe:
        "Ich nutze SASS, um Styles strukturierter aufzubauen und auch größere Stylesheets übersichtlich zu halten. Funktionen wie Variablen, Verschachtelungen und wiederverwendbare Muster helfen mir dabei, wartbare Styling-Strukturen zu entwickeln.",
  },
  {
    title: "CSS Modules",
    info: "CSS Modules are part of my daily work in component-based frontend development. I value the scoped styling approach because it supports clean separation, reusability and maintainability across growing applications.",
    infoDe:
        "CSS-Modules gehören in der komponentenbasierten Frontendentwicklung zu meinem Arbeitsalltag. Ich schätze den gekapselten Styling-Ansatz, weil er eine saubere Trennung, Wiederverwendbarkeit und Wartbarkeit auch in wachsenden Anwendungen unterstützt.",
  },
  {
    title: "Salesforce",
    info: "In my professional work, I also develop within the Salesforce ecosystem. This includes working with standard and custom Lightning Web Components (LWC) and using SLDS to create consistent user interfaces in a component-based environment.",
    infoDe:
        "In meinem beruflichen Alltag entwickle ich außerdem im Salesforce-Ökosystem. Dazu gehört die Arbeit mit Standard- und Custom Lightning Web Components (LWC) sowie der Einsatz von SLDS, um konsistente Benutzeroberflächen in einer komponentenbasierten Umgebung zu erstellen.",
  },
];

const additionalExperienceTechnologies = [
  {
    title: "Node.js",
    info: "I have worked with Node.js as part of fullstack and backend-oriented projects. It allowed me to build server-side functionality and better understand how frontend and backend interact in modern web applications.",
    infoDe:
        "Mit Node.js habe ich im Rahmen von Fullstack- und backendnahen Projekten gearbeitet. Dadurch konnte ich serverseitige Funktionen umsetzen und besser verstehen, wie Frontend und Backend in modernen Webanwendungen zusammenspielen.",
  },
  {
    title: "Express.js",
    info: "I have used Express.js to build backend structures and API logic in personal fullstack projects. It helped me work with routing, request handling and the fundamentals of server-side application design.",
    infoDe:
        "Express.js habe ich genutzt, um Backend-Strukturen und API-Logik in eigenen Fullstack-Projekten umzusetzen. Dadurch konnte ich mit Routing, Request-Handling und den Grundlagen serverseitiger Anwendungsarchitektur arbeiten.",
  },
  {
    title: "MongoDB",
    info: "I have used MongoDB in personal MERN projects to handle persistent data storage. Working with it helped me build a stronger understanding of document-based data modeling and backend data flow.",
    infoDe:
        "MongoDB habe ich in eigenen MERN-Projekten für die persistente Datenspeicherung eingesetzt. Die Arbeit damit hat mein Verständnis für dokumentenbasierte Datenmodelle und Datenflüsse im Backend gestärkt.",
  },
];

const currentImprovementsTechnologies = [
  {
    title: "Tailwind CSS",
    info: "I am currently expanding my Tailwind CSS skills to strengthen my approach to fast, utility-first UI development. It is a valuable addition for building modern interfaces efficiently and consistently.",
    infoDe:
        "Ich baue meine Kenntnisse in Tailwind CSS aktuell weiter aus, um meinen Ansatz für schnelle, utility-first orientierte UI-Entwicklung zu vertiefen. Gerade für moderne Oberflächen ist es eine wertvolle Ergänzung, um effizient und konsistent zu arbeiten.",
  },
  {
    title: "TypeScript",
    info: "I am currently continuing to improve my TypeScript skills, especially in the context of modern frontend development with Next.js. My goal is to deepen type-safe development and build even more robust, maintainable applications.",
    infoDe:
        "Ich entwickle meine TypeScript-Kenntnisse aktuell gezielt weiter, insbesondere im Kontext moderner Frontendentwicklung mit Next.js. Mein Ziel ist es, typsichere Entwicklung weiter zu vertiefen und noch robustere, wartbarere Anwendungen umzusetzen.",
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
              ? "Hier erhalten Sie einen Überblick über die Technologien, mit denen ich regelmäßig arbeite, in Projekten praktische Erfahrung gesammelt habe und die ich aktuell gezielt weiter vertiefe. Kontinuierliche Weiterentwicklung ist für mich ein wichtiger Teil professioneller Softwareentwicklung, um moderne Standards im Blick zu behalten und Lösungen nachhaltig umzusetzen."
              : "Here you will find an overview of the technologies I work with regularly, those I have used in projects, and the areas I am currently developing further. Continuous learning is an important part of professional software development for me, helping me stay aligned with modern standards and build sustainable solutions."}
        </p>

        <div className={styles.imageWrapper}>
          <Image
              src={darkMode ? TechDark : TechLight}
              alt={language === "de" ? "Mein Tech-Stack" : "My Tech Stack"}
              sizes="(max-width: 768px) 90vw, 900px"
              quality={75}
              fill
              style={{ objectFit: "contain" }}
              priority
          />
        </div>

        <section className={styles.group}>
          <h3>{language === "de" ? "Im täglichen Einsatz" : "Daily Work"}</h3>
          <AccordionList items={dailyWorkTechnologies} />
        </section>

        <section className={styles.group}>
          <h3>
            {language === "de" ? "Weitere Projekterfahrung" : "Additional Experience"}
          </h3>
          <AccordionList items={additionalExperienceTechnologies} />
        </section>

        <section className={styles.group}>
          <h3>
            {language === "de" ? "Aktuelle Weiterentwicklung" : "Current Improvements"}
          </h3>
          <AccordionList items={currentImprovementsTechnologies} />
        </section>
      </section>
  );
}