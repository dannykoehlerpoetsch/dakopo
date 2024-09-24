import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/404.jpg";
import styles from "./NotFound.module.css";
import { LanguageContext } from "../../context/LanguageContext";

export default function NotFound() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.foundWrapper}>
      <img src={Image} alt="" />
      <h1>
        {language === "de"
          ? "Die gesuchte Seite existiert nicht."
          : "The page you are looking for does not exist."}
      </h1>
      <h2>
        {language === "de"
          ? "Sie werden zur Startseite weitergeleitet"
          : "You will be redirected to the homepage."}
      </h2>
    </div>
  );
}
