"use client";

import greenImg from "@/assets/tmp/green.jpg";
import yellowImg from "@/assets/tmp/yellow.jpg";
import styles from "./Service.module.css";
import buttonStyles from "@/components/core/Navbar/Navbar.module.css";
import { FaWhatsapp } from "react-icons/fa";

// Morbi malesuada dolor eget purus hendrerit aenean. 50
// Maecenas tristique lacus mauris, facilisis blandit metus viverra ac. Nullam nec. 80
// Phasellus elementum mauris commodo libero dignissim egestas. Pellentesque dignissim pretium leo eget rhoncus massa nunc. 120

export default function Service() {
  return (
    <section className={styles.serviceContainer}>
      <div className={styles.block}>
        <div className={styles.photo}>
          <img
            src={greenImg.src}
            alt={"mesa-1"}
            className={styles.photoObject}
          />
        </div>
        <div className={`${styles.text} ${styles.textBig}`}>
          Morbi malesuada dolor eget purus hendrerit aenean.
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.block}>
        <div className={`${styles.text} ${styles.textNormal}`}>
          Phasellus elementum mauris commodo libero dignissim egestas.
          Pellentesque dignissim pretium leo eget rhoncus massa nunc.
        </div>
        <div className={styles.photo}>
          <img
            src={yellowImg.src}
            alt={"mesa-2"}
            className={styles.photoObject}
          />
        </div>
      </div>
      <div className={styles.informationButton}>
        <a
          href="https://wa.me/5214771913370"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.whatsappButton}
        >
          <FaWhatsapp className={buttonStyles.whatsappIcon} />
          Más información
        </a>
      </div>
    </section>
  );
}
