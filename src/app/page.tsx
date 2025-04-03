"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel";

export default function Home() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Tarta de Chocolate",
      descripcion: "Deliciosa tarta de chocolate.",
    },
    { id: 2, nombre: "Cheesecake", descripcion: "Suave y cremoso cheesecake." },
    {
      id: 3,
      nombre: "Cupcake de Vainilla",
      descripcion: "Perfecto para cualquier momento.",
    },
    { id: 4, nombre: "Brownie", descripcion: "Intenso y con mucho sabor." },
    { id: 5, nombre: "Macaron", descripcion: "Fino y colorido." },
    // Agrega más productos según lo requieras...
  ]);

  return (
    <>
      <Carousel />
      <div className={styles.gridContainer}>
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
}
