"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Promos.module.css";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import { PROMO_EXTRA, PROMO_MIDDLE, PROMO_PRINCIPAL } from "@/constants/promos";

export default function Promos() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        style={{
          height: "100%",
          //  @ts-expect-error: Propiedades (--swiper-*) no son reconocidas por TypeScript en este contexto.
          "--swiper-navigation-color": "#795e47",
          "--swiper-navigation-size": "35px",
          "--swiper-navigation-sides-offset": "20px",
        }}
        modules={[Navigation, Keyboard, Autoplay]}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            fill
            src={PROMO_PRINCIPAL}
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src={PROMO_MIDDLE}
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src={PROMO_EXTRA}
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
