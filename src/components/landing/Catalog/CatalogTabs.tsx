"use client";

import { useTabs } from "@/contexts/TabsContext";
import styles from "@/styles/landing/Catalog/CatalogTabs.module.css";
import { Categories, Services } from "@/constants/tabs";

export default function CatalogTabs() {
  const { selectedCategory, setSelectedCategory } = useTabs();

  return (
    <div className={styles.tabs}>
      {Object.entries(Categories).map(([key, category]) => (
        <button
          key={key}
          className={`${styles.tabButton} ${
            selectedCategory === key ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory(key)}
        >
          <div className={styles.icon}>
            <img src={category.icon} alt={category.label} />
          </div>
          <span>{category.label}</span>
        </button>
      ))}

      <div className={styles.tabsDivider}></div>

      {Object.entries(Services).map(([key, service]) => (
        <button
          key={key}
          className={`${styles.tabButton} ${
            selectedCategory === key ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory(key)}
        >
          <div className={styles.icon}>
            <img src={service.icon} alt={service.label} />
          </div>
          <span>{service.label}</span>
        </button>
      ))}
    </div>
  );
}
