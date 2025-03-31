"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/minureposteria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="0" height="0">
                <linearGradient
                  id="instagram-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop stopColor="#fccc63" offset="0%" />
                  <stop stopColor="#f77737" offset="25%" />
                  <stop stopColor="#e4405f" offset="50%" />
                  <stop stopColor="#c13584" offset="75%" />
                  <stop stopColor="#833ab4" offset="90%" />
                  <stop stopColor="#5b51d8" offset="100%" />
                </linearGradient>
              </svg>

              <FaInstagram className={styles.instagramIcon} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574953281087"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.facebookIcon} />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
          </div>
        </div>

        <div className={styles.right}>
          <a
            href="https://wa.me/5214771913370"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            Haz tu pedido
          </a>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? (
            <FiX size={24} color="#333" />
          ) : (
            <FiMenu size={24} color="#333" />
          )}
        </button>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileSocialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className={styles.mobileWhatsapp}>
              <a
                href="https://wa.me/5214771913370"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        )}
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSocialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className={styles.mobileWhatsapp}>
            <a
              href="https://wa.me/5214771913370"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
