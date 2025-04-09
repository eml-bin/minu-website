"use client";

import { useProduct } from "@/contexts/ProductContext";
import { categories } from "@/constants/products";
import styles from "@/styles/landing/Catalog.module.css";
import dessertTableIcon from "@/assets/icons/mesapostres.png";
import { capitalizeText, getCategoryIcon } from "@/utils/formats";
import { Category } from "@/models/Category";

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
              <img src={getCategoryIcon(category as Category)} alt={category} />
            </div>
            <span>{capitalizeText(category)}</span>
          </button>
        ))}

        <div className={styles.tabsDivider}></div>
        <button
          key="servicios"
          className={`${styles.tabButton} ${
            selectedCategory === "servicios" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("servicios")}
        >
          <div className={styles.icon}>
            <img src={dessertTableIcon.src} alt="servicios" />
          </div>
          <span>Mesas de Postres</span>
        </button>
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
