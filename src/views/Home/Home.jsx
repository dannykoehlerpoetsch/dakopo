"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Home.module.css";
import Portrait from "../../assets/danny-start.webp";
import Mern from "../../assets/MERN-logo.png";
import Praktikum from "../../components/Praktikum/Praktikum";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1>Danny Köhler-Poetsch</h1>
        <h2>{language === "de" ? "Softwareentwickler" : "Web Developer"}</h2>
        <p>Leipzig{language === "de" ? "" : ", Germany"}</p>

        <div className={styles.contentLogo}>
          <Image src={Mern} alt="mern-stack logo" width={250} height={100} style={{ width: "auto", height: "auto" }} />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          className={darkMode ? styles.darkMode : styles.lightMode}
          src={Portrait}
          alt="Picture from Danny Köhler-Poetsch"
          title="Hi, I'm Danny Köhler-Poetsch!"
          priority
          width={400}
          height={600}
          style={{ width: "auto", height: "75vh", borderRadius: "20px" }}
        />
      </div>
    </section>
  );
}
