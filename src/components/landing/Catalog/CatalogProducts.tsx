"use client";

import { useTabs } from "@/contexts/TabsContext";
import styles from "@/styles/landing/Catalog/CatalogProducts.module.css";

export default function CatalogProducts() {
  const { filteredProducts } = useTabs();

  return (
    <div className={styles.productContainer}>
      {filteredProducts.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.cardImage}>
            <img src={product.src} alt={product.name} />
          </div>
          <div className={styles.cardInfo}>
            <h3>{product.name}</h3>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
