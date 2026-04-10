"use client";

import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./AccordionList.module.css";

export default function AccordionList({ items, defaultOpen = true }) {
  const { language } = useContext(LanguageContext);

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={defaultOpen ? items.map((_, i) => `item-${i}`) : []}
      className={styles.accordionRoot}
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className={styles.accordionItem}
        >
          <Accordion.Header asChild>
            <h3>
              <Accordion.Trigger className={styles.accordionTrigger}>
                <span className={styles.chevron} aria-hidden="true">
                  ▶
                </span>
                {language === "de" ? (item.titleDe || item.title) : item.title}
              </Accordion.Trigger>
            </h3>
          </Accordion.Header>
          <Accordion.Content className={styles.accordionContent}>
            <p>{language === "de" ? item.infoDe : item.info}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
