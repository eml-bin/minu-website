"use client";

import { useState } from "react";
import { FiMenu, FiX, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
              href="https://www.facebook.com/profile.php?id=61574953281087"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/minureposteria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.whatsappButton}>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSocialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
          </div>
          <div className={styles.mobileWhatsapp}>
            <a
              href="https://wa.me/1234567890"
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
