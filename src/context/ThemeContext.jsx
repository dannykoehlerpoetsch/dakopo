"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

/**
 * Hält den Theme-Zustand und spiegelt ihn nach localStorage.
 *
 * Der Schreib-Effekt ist bewusst hinter einen "gelesen"-Schalter gesetzt:
 * ohne diesen schreibt der Effekt beim ersten Mount den Anfangszustand
 * (false) zurück und überschreibt damit die gespeicherte Auswahl –
 * die Darkmode ging nach einem Neuladen verloren.
 */
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [themeGelesen, setThemeGelesen] = useState(false);

  useEffect(() => {
    let gelesen = false;
    try {
      const gespeichert = localStorage.getItem("darkMode");
      if (gespeichert !== null) {
        gelesen = JSON.parse(gespeichert) === true;
      }
    } catch {
      // Beschädigter Eintrag: bei Hellmode bleiben und ihn unten überschreiben.
      gelesen = false;
    }

    // Der gespeicherte Wert ist erst nach der Auslieferung lesbar; ein Read
    // waehrend des Renderns waere eine Hydration-Abweichung.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDarkMode(gelesen);

    // Die Preload-Klasse hat ihren Zweck erfüllt, sobald der echte Zustand
    // feststeht. Würde sie stehen bleiben, widerspräche die Preload-Farbe in
    // App.css einem späteren Wechsel in die Lightmode.
    document.documentElement.classList.remove("dark-mode-preload");

    setThemeGelesen(true);
  }, []);

  useEffect(() => {
    if (themeGelesen) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, themeGelesen]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
