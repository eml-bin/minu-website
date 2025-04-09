import macaronsIcon from "@/assets/icons/macarons.png";
import cakesIcon from "@/assets/icons/pasteles.png";
import paysIcon from "@/assets/icons/tartas.png";
import othersIcon from "@/assets/icons/otros.png";

export const capitalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

type Category = "macarons" | "pasteles" | "tartas" | "otros";

export const getCategoryIcon = (category: Category): string => {
  const categoryIcons: Record<Category, string> = {
    macarons: macaronsIcon.src,
    pasteles: cakesIcon.src,
    tartas: paysIcon.src,
    otros: othersIcon.src,
  };
  return categoryIcons[category] || othersIcon.src;
};
