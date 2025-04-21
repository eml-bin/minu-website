"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { products } from "@/constants/tmp/products";
import { Product } from "@/interfaces/Product";

interface TabsContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("macarons");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <TabsContext.Provider
      value={{ selectedCategory, setSelectedCategory, filteredProducts }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
