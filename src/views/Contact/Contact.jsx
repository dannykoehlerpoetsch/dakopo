"use client";

import React, { useId, useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import styles from "./Contact.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

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
              ? "Der Name muss mindestens 3 Zeichen lang sein."
              : "Name must be at least 3 characters long."
      );
      return;
    }

    if (!validateEmail(mail)) {
      setError(
          language === "de"
              ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
              : "Please enter a valid email address."
      );
      return;
    }

    if (message.length < 5 || message.length > 2500) {
      setError(
          language === "de"
              ? "Die Nachricht muss zwischen 5 und 2500 Zeichen lang sein."
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
        <h2>{language === "de" ? "Kontakt" : "Get in touch"}</h2>

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
              {language === "de" ? "E-Mail schreiben" : "Send an email"}
            </button>
          </div>
        </div>

        <p>{language === "de" ? "oder" : "or"}</p>

        <div className={styles.contactForm}>
          <h3>
            {language === "de"
                ? "Schreiben Sie mir gerne eine Nachricht"
                : "Feel free to send me a message"}
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
                        language === "de" ? "Max Mustermann" : "e.g. John Doe"
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
                            ? "max.mustermann@mail.de"
                            : "e.g. john.doe@mail.com"
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
                            : "Your message"
                      }
                      required
                      value={message}
                      onChange={handleChange}
                  ></textarea>
                </label>

                <button
                    className={styles.submitBtn}
                    title={
                      language === "de"
                          ? "Nachricht senden"
                          : "Send your message"
                    }
                    disabled={loading}
                >
                  {loading
                      ? language === "de"
                          ? "Wird gesendet..."
                          : "Sending..."
                      : language === "de"
                          ? "Nachricht senden"
                          : "Send message"}
                </button>
              </form>
          )}

          <div aria-live="polite" role="status">
            {error && <p className={styles.errorMessage}>{error}</p>}
            {submitted && (
                <p className={styles.successMessage}>
                  {language === "de"
                      ? `Nachricht erfolgreich gesendet. Weiterleitung in ${countdown} Sekunden. Vielen Dank!`
                      : `Message sent successfully. Redirecting in ${countdown} seconds. Thank you!`}
                </p>
            )}
          </div>
        </div>
      </section>
  );
}