"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/core/Background.module.css";

const Background = ({ children }: { children: React.ReactNode }) => {
  const [bgClass, setBgClass] = useState<string>("");

  useEffect(() => {
    const classes = ["yellow", "green", "orange"];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    setBgClass(randomClass);
  }, []);

  return (
    <div className={`${styles.background} ${styles[bgClass]}`}>{children}</div>
  );
};

export default Background;
