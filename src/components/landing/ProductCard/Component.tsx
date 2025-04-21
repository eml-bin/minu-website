"use client";

import { Product } from "@/interfaces/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProductCard.module.css";
import { useRef } from "react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const hasMultiple = product.sources.length > 1;
  const paginationRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.card}>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          autoplay={
            hasMultiple ? { delay: 2500, disableOnInteraction: false } : false
          }
          loop={hasMultiple}
          className={styles.swiper}
        >
          {product.sources.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.cardImage}>
                <img src={src} alt={`${product.name} ${idx + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.cardInfo}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
}
