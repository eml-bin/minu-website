"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { products } from "@/constants/products";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("macarons");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <ProductContext.Provider
      value={{ selectedCategory, setSelectedCategory, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
