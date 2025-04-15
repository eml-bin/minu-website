"use client";

import { useTabs } from "@/contexts/TabsContext";
import CatalogProducts from "./Catalog/CatalogProducts";
import CatalogTabs from "./Catalog/CatalogTabs";

export default function Catalog() {
  const { selectedCategory } = useTabs();

  return (
    <>
      <CatalogTabs />
      <CatalogProducts />
    </>
  );
}
