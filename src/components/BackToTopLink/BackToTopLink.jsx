import React from "react";
import styles from "./BackToTopLink.module.css";

export default function BackToTopLink() {
  return (
    <a href="#top" title="back to top" className={styles.backToTopLink}>
      <i className="fa-regular fa-circle-up"></i>
    </a>
  );
}
