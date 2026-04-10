"use client";

import React, { useId, useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import styles from "./Contact.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Impressum from "../../components/Impressum/Impressum";

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showImpressum, setShowImpressum] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const countdownRef = useRef(null);

  useEffect(() => {
    if (submitted) {
      countdownRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownRef.current);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdownRef.current);
    }
  }, [submitted, router]);

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
    setLoading(true);

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
      } else {
        setError(
          language === "de"
            ? "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut."
            : "Something went wrong. Please try again later."
        );
      }
    } catch (err) {
      console.error("Error submitting the form", err);
      setError(
        language === "de"
          ? "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut."
          : "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`${styles.contactWrapper} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <h2>
        {language === "de"
          ? "Treten Sie mit mir in Kontakt"
          : "Get in contact with me!"}
      </h2>
      <div className={styles.mailContact}>
        <div className={styles.mailContactWrapper}>
          <div className={styles.smLinks}>
            <a
              href="https://www.linkedin.com/in/danny-k%C3%B6hler-poetsch-6738332a5/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="https://github.com/dannykoehlerpoetsch"
              target="_blank"
              title="GitHub"
            >
              <FaSquareGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/da_ko_po/"
              target="_blank"
              title="Instagram"
            >
              <FaSquareInstagram aria-hidden="true" />
            </a>
          </div>
          <button
            className={styles.emailBtn}
            onClick={() => {
              const user = "dakopo-coding";
              const domain = "gmx.net";
              window.location.href = `mailto:${user}@${domain}`;
            }}
          >
            {language === "de" ? "E-Mail senden" : "Send E-Mail"}
          </button>
        </div>
      </div>

      <p>{language === "de" ? "oder" : "or"}</p>

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
            <label htmlFor={nameId}>
              Name:
              <input
                type="text"
                name="name"
                id={nameId}
                placeholder={
                  language === "de" ? "Max Mustermann" : "example: `John Doe`"
                }
                required
                value={name}
                onChange={handleChange}
                className={darkMode ? styles.darkMode : styles.lightMode}
              />
            </label>
            <label htmlFor={emailId}>
              E-Mail:
              <input
                type="email"
                name="email"
                id={emailId}
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
            <label htmlFor={messageId}>
              {language === "de" ? "Ihre Nachricht" : "Your message"}
              <textarea
                name="message"
                id={messageId}
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
              disabled={loading}
            >
              {loading
                ? (language === "de" ? "Wird gesendet..." : "Sending...")
                : (language === "de" ? "absenden" : "send message")}
            </button>
          </form>
        )}

        <div aria-live="polite" role="status">
          {error && <p className={styles.errorMessage}>{error}</p>}
          {submitted && (
            <p className={styles.successMessage}>
              {language === "de"
                ? `Nachricht erfolgreich verschickt. Weiterleitung in ${countdown}s. Vielen Dank!`
                : `Message sent successfully! Redirecting in ${countdown}s. Thank you!`}
            </p>
          )}
        </div>
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
