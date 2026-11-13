"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageContext } from "../../context/LanguageContext";

const pageTitles = {
  "/": {
    de: "Danny Köhler-Poetsch – Frontendentwickler | Leipzig",
    en: "Danny Köhler-Poetsch – Frontend Developer | Leipzig",
  },
  "/about": {
    de: "Über mich | DaKoPo Portfolio",
    en: "About me | DaKoPo Portfolio",
  },
  "/projects": {
    de: "Projekte | DaKoPo Portfolio",
    en: "Projects | DaKoPo Portfolio",
  },
  "/tech-stack": {
    de: "Tech-Stack | DaKoPo Portfolio",
    en: "Tech Stack | DaKoPo Portfolio",
  },
  "/contact": {
    de: "Kontakt | DaKoPo Portfolio",
    en: "Contact | DaKoPo Portfolio",
  },
  "/imprint": {
    de: "Impressum & Datenschutz | DaKoPo Portfolio",
    en: "Imprint & Privacy | DaKoPo Portfolio",
  },
};

/**
 * Die Inhalte dieser Seite werden je Sprache im Client gewechselt, die
 * Next-Metadaten sind statisch. Diese Komponente ist die bewusste Bruecke:
 * Sie haelt document.title konsistent zur aktiven Sprache und zur Route.
 */

export default function DynamicTitle() {
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();

  useEffect(() => {
    const titles = pageTitles[pathname];
    if (titles) {
      document.title = language === "de" ? titles.de : titles.en;
    }
  }, [language, pathname]);

  return null;
}
