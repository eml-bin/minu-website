"use client";

import { useState, useEffect } from "react";

export const useRandomBackgroundColor = () => {
  const [bgColor, setBgColor] = useState<string>("");

  useEffect(() => {
    const colors = ["#ffb384", "#bf68ff", "#f88282"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  return bgColor;
};
