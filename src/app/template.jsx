"use client";

import styles from "./template.module.css";

export default function Template({ children }) {
  return <div className={styles.pageTransition}>{children}</div>;
}
