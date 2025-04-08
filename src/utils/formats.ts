import macaronsIcon from "@/assets/icons/macarons.png";
import cakesIcon from "@/assets/icons/cakes.png";
import paysIcon from "@/assets/icons/pays.png";
import othersIcon from "@/assets/icons/others.png";

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
