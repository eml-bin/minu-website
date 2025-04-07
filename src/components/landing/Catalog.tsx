"use client";

import { useProduct } from "@/contexts/ProductContext";
import { categories } from "@/constants/products";
import { useState } from "react";
import styles from "@/styles/landing/Catalog.module.css";
import macaronsIcon from "@/assets/icons/macarons.png";
import { capitalize } from "@/utils/text";

export default function Catalog() {
  const { selectedCategory, setSelectedCategory, filteredProducts } =
    useProduct();

  return (
    <>
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <div className={styles.icon}>
              <img src={macaronsIcon.src} alt={category} />
            </div>
            <span>{capitalize(category)}</span>
          </button>
        ))}
      </div>
      <div className={styles.productContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
