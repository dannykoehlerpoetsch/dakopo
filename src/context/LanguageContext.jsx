"use client";

import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const STORAGE_KEY = "language";
const SUPPORTED_LANGUAGES = ["de", "en"];

// Fruehere Versionen haben "eng" gespeichert; das wird beim Laden normalisiert.
function normalizeLanguage(value) {
  if (value === "eng") return "en";
  return SUPPORTED_LANGUAGES.includes(value) ? value : null;
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Bewusst ohne Anfangswert: try liefert den Wert, catch den Ausnahmefall.
    let gespeichert;
    try {
      gespeichert = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    } catch {
      gespeichert = null;
    }
    if (gespeichert) {
      // Die gespeicherte Sprache kann erst nach der Auslieferung gelesen werden
      // (statischer Render = Standardwert); ein frueherer Read waehrend des
      // Renderns erzeuge eine Hydration-Abweichung.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(gespeichert);
    }
  }, []);

  useEffect(() => {
    // <html lang> muss zum tatsaechlich gerenderten Inhalt passen, sonst
    // irrefuehren wir Screenreader und Suchmaschinen.
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const switchLanguage = (lang) => {
    const nextLanguage = normalizeLanguage(lang);
    if (!nextLanguage) return;

    setLanguage(nextLanguage);
    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Ohne Speicher bleibt die Umschaltung fuer die Sitzung funktionstaetig.
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
