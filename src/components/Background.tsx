"use client";

import { useState, useEffect } from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  const [bgColor, setBgColor] = useState<string>("");

  useEffect(() => {
    const colors = ["#ffb384", "#bf68ff", "#f88282"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        transition: "background-color",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
