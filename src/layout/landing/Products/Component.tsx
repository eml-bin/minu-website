"use client";

import { useTabs } from "@/contexts/TabsContext";
import styles from "./Products.module.css";
import { Product } from "@/interfaces/Product";
import ProductCard from "@/components/landing/ProductCard/Component";

export default function Products() {
  const { filteredProducts } = useTabs();

  return (
    <div className={styles.productContainer}>
      {filteredProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
