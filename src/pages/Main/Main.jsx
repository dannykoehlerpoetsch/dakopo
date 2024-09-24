import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
