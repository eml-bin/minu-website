"use client";

import CatalogProducts from "./Catalog/CatalogProducts";
import CatalogTabs from "./Catalog/CatalogTabs";

export default function Catalog() {
  return (
    <>
      <CatalogTabs />
      <CatalogProducts />
    </>
  );
}
