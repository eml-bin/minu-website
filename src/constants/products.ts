import productImg from "@/assets/product.png";

export const products = [
  {
    id: 1,
    name: "Macarons de Colores",
    category: "macarons",
    price: 50,
    image: productImg.src,
  },
  {
    id: 2,
    name: "Pastel de Nata",
    category: "pasteles",
    price: 70,
    image: productImg.src,
  },
  {
    id: 3,
    name: "Tarta de Nuez",
    category: "tartas",
    price: 70,
    image: productImg.src,
  },
  {
    id: 3,
    name: "Galletas M&Ms",
    category: "otros",
    price: 30,
    image: productImg.src,
  },
];

export const categories = ["macarons", "pasteles", "tartas", "otros"];
