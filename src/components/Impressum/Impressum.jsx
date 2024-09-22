import React from "react";
import styles from "./Impressum.module.css";
import BackToTopLink from "../BackToTopLink/BackToTopLink";

export default function Impressum() {
  const person = [
    { title: "Name / name: ", value: " Danny Köhler-Poetsch" },
    { title: "Straße / street: ", value: " Erich-Zeigner-Allee 89" },
    { title: "PLZ, Ort / ZIP, city: ", value: " 04229, Leipzig" },
    { title: "Land / country: ", value: " Deutschland" },
    { title: "E-Mail: ", value: " danny_koehler-poetsch@gmx.net" },
    { title: "Telefon / phone: ", value: " 0177 808 73 70" },
  ];

  return (
    <div className={styles.impressum}>
      <h3>Impressum / Imprint</h3>
      <p>
        Angaben gemäß § 5 TMG & verantwortlich für den Inhalt nach § 55 Abs. 2
        RStV:
      </p>
      <p>
        Information in accordance with Section 5 of the German Telemedia Act
        (TMG) & Responsible for the content according to Section 55 (2) of the
        German Interstate Broadcasting Treaty (RStV):
      </p>
      <ul>
        <li>
          {person.map((data, index) => (
            <li key={index}>
              <span>
                <b>{data.title}</b>
              </span>
              {data.value}
            </li>
          ))}
        </li>
      </ul>
      <h3>Datenschutz</h3>
      <p>
        Auf dieser Website werden keine Cookies verwendet. Es wird lediglich im
        lokalen Speicher (LocalStorage) des Browsers gespeichert, ob der
        Benutzer den Darkmode oder Lightmode aktiviert hat und welche
        Spracheinstellung (Deutsch oder Englisch) ausgewählt wurde. Diese
        Informationen dienen ausschließlich zur Speicherung der Darstellungs-
        und Spracheinstellungen und werden nicht an Dritte weitergegeben.
      </p>
      <h3>Privacy Policy</h3>

      <p>
        This website does not use cookies. Only the user's choice of Dark Mode
        or Light Mode and the selected language setting (German or English) are
        stored in the browser's local storage (LocalStorage). This information
        is solely used to save the display and language settings and is not
        shared with third parties.
      </p>
      <BackToTopLink />
    </div>
  );
}
