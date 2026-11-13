"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

/**
 * Sprung zum Inhalt fuer Tastatur-Nutzung (WCAG 2.4.1).
 * Erster fokussierbarer Eintrag im Dokument, sichtbar erst bei Fokus.
 */
export default function SkipLink() {
  const { language } = useContext(LanguageContext);

  return (
    <a className="skipLink" href="#main-content">
      {language === "de" ? "Zum Inhalt springen" : "Skip to content"}
    </a>
  );
}
