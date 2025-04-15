import macaronsIcon from "@/assets/icons/macarons.png";
import cakesIcon from "@/assets/icons/cakes.png";
import paysIcon from "@/assets/icons/pays.png";
import othersIcon from "@/assets/icons/others.png";
import TabsInterface from "@/interfaces/Tabs";

export const Categories: Record<string, TabsInterface> = {
  macarons: { label: "Macarrones", icon: macaronsIcon.src },
  cakes: { label: "Pasteles", icon: cakesIcon.src },
  pays: { label: "Tartas", icon: paysIcon.src },
  others: { label: "Otros", icon: othersIcon.src },
};

import dessertTableIcon from "@/assets/icons/dessert_table.png";

export const Services: Record<string, TabsInterface> = {
  dessert_table: {
    label: "Mesa de Postres",
    icon: dessertTableIcon.src,
  },
};
