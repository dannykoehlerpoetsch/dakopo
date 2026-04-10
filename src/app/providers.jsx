"use client";

import ThemeProvider, { ThemeContext } from "../context/ThemeContext";
import LanguageProvider from "../context/LanguageContext";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";
import { useContext } from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DynamicTitle />
        <ThemeWrapper>{children}</ThemeWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function ThemeWrapper({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      {children}
    </div>
  );
}
