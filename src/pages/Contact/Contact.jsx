import React, { useId, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Impressum from "../../components/Impressum/Impressum";

export default function Contact() {
  const id = useId();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showImpressum, setShowImpressum] = useState(false);

  const handleChange = (e) => {
    setError("");
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setMail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError(
        language === "de"
          ? "Der Name muss mindestens 3 Zeichen lang sein"
          : "Name must be at least 3 characters long."
      );
      return;
    }

    if (!validateEmail(mail)) {
      setError(
        language === "de"
          ? "Bitte eine gültige Email-Adresse eingeben"
          : "Please enter a valid email address."
      );
      return;
    }

    if (message.length < 5 || message.length > 2500) {
      setError(
        language === "de"
          ? "Die Nachricht muss mindestens 5 Zeichen enthalten und nicht mehr als 2500 Zeichen"
          : "Message must be between 5 and 2500 characters long."
      );
      return;
    }

    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("https://formspree.io/f/xyzganan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: mail,
          message: message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setMail("");
        setMessage("");

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setError(
          language === "de"
            ? "Etwas ist schiefgalaufen. Bitte versuchen Sie es später erneut"
            : "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setError(
        language === "de"
          ? "Etwas ist schiefgalaufen. Bitte versuchen Sie es später erneut"
          : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <section
      className={`${styles.contactWrapper} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <h2>{language === "de" ? "Kontakt" : "Contact"}</h2>
      <h3>
        {language === "de"
          ? "Treten Sie mit mir in Kontakt"
          : "Get in contact with me!"}
      </h3>
      <div className={styles.mailContact}>
        <div className={styles.mailContactWrapper}>
          <div className={styles.smLinks}>
            <a
              href="https://www.linkedin.com/in/danny-k%C3%B6hler-poetsch-6738332a5/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/dannykoehlerpoetsch" target="_blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.instagram.com/da_ko_po/" target="_blank">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="https://www.facebook.com/danny.koehler" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <p>
            E-Mail:{" "}
            <a href="mailto:danny_koehler-poetsch@gmx.net">
              Danny_Koehler-Poetsch@gmx.net
            </a>
          </p>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h3>
          {language === "de"
            ? "Schreiben Sie mir eine Nachricht"
            : "Leave me a message!"}
        </h3>
        {!submitted && (
          <form
            method="POST"
            action="https://formspree.io/f/xyzganan"
            onSubmit={handleSubmit}
          >
            <label htmlFor={id}>
              Name:
              <input
                type="text"
                name="name"
                id={id}
                placeholder={
                  language === "de" ? "Max Mustermann" : "example: `John Doe`"
                }
                required
                value={name}
                onChange={handleChange}
                className={darkMode ? styles.darkMode : styles.lightMode}
              />
            </label>
            <label htmlFor={id}>
              E-Mail:
              <input
                type="email"
                name="email"
                id={id}
                placeholder={
                  language === "de"
                    ? "Max-Mustermann@mail.de"
                    : "example: `John-Doe@mail.de`"
                }
                required
                value={mail}
                onChange={handleChange}
              />
            </label>
            <label htmlFor={id}>
              {language === "de" ? "Ihre Nachricht" : "Your message"}
              <textarea
                name="message"
                id={id}
                rows="10"
                cols="33"
                placeholder={
                  language === "de"
                    ? "Ihre Nachricht an mich"
                    : "your message to me"
                }
                required
                value={message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button
              className={styles.submitBtn}
              title={
                language === "de" ? "Nachricht absenden" : "submit your message"
              }
            >
              {language === "de" ? "absenden" : "send message"}
            </button>
          </form>
        )}

        {error && <p className={styles.errorMessage}>{error}</p>}
        {submitted && (
          <p className={styles.successMessage}>
            {language === "de"
              ? "Nachricht erfolgreich verschickt. Sie werden in wenigen Sekunden auf die Startseite weitergeleitet. Vielen Dank!"
              : " Message sent successfully! You will be redirected to the homepage shortly. Thank you!"}
          </p>
        )}
      </div>
      <button
        className={styles.impressumBtn}
        onClick={() => setShowImpressum((prevState) => !prevState)}
      >
        {showImpressum && language === "eng" ? "close" : ""}{" "}
        {language === "de" ? "Impressum" : "Imprint"}{" "}
        {showImpressum && language === "de" ? "schließen" : ""}
      </button>
      {showImpressum && <Impressum />}
    </section>
  );
}
