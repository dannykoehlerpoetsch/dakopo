"use client";

import { useContext, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./AccordionList.module.css";

export default function AccordionList({ items, defaultOpen = true }) {
  const { language } = useContext(LanguageContext);
  const allKeys = items.map((_, i) => `item-${i}`);
  const [openItems, setOpenItems] = useState(defaultOpen ? allKeys : []);

  const allExpanded = openItems.length === items.length;

  const toggleAll = () => {
    setOpenItems(allExpanded ? [] : allKeys);
  };

  return (
    <div className={styles.accordionWrapper}>
      <button
        className={styles.toggleAllBtn}
        onClick={toggleAll}
        aria-label={allExpanded ? "Collapse all" : "Expand all"}
      >
        {allExpanded
          ? (language === "de" ? "Alle einklappen" : "Collapse all")
          : (language === "de" ? "Alle aufklappen" : "Expand all")}
      </button>
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
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
    </div>
  );
}
