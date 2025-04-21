"use client";

import { useTabs } from "@/contexts/TabsContext";

import { isService } from "@/constants/tabs";
import Tabs from "@/components/landing/Tabs/Component";
import Service from "@/layout/landing/Service/Component";
import Products from "@/layout/landing/Products/Component";

export default function Catalog() {
  const { selectedCategory } = useTabs();

  return (
    <>
      <Tabs />
      {isService(selectedCategory) ? <Service /> : <Products />}
    </>
  );
}
