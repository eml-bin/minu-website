import productImg from "@/assets/product.png";

export const products = [
  {
    id: 1,
    name: "Brownie de Chocolate",
    category: "brownies",
    price: 50,
    image: productImg.src,
  },
  {
    id: 2,
    name: "Cheesecake de Fresa",
    category: "cheesecakes",
    price: 70,
    image: productImg.src,
  },
  {
    id: 3,
    name: "Galletas de Chispas",
    category: "cookies",
    price: 30,
    image: productImg.src,
  },
];

export const categories = ["brownies", "cheesecakes", "cookies"];
