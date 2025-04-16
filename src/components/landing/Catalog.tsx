"use client";

import { useTabs } from "@/contexts/TabsContext";
import CatalogProducts from "./Catalog/CatalogProducts";
import CatalogTabs from "./Catalog/CatalogTabs";
import { isService } from "@/constants/tabs";
import CatalogService from "./Catalog/CatalogService";

export default function Catalog() {
  const { selectedCategory } = useTabs();

  return (
    <>
      <CatalogTabs />
      {isService(selectedCategory) ? <CatalogService /> : <CatalogProducts />}
    </>
  );
}
