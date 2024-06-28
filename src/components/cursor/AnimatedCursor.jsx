// components/AnimatedCursor.js
"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/AnimatedCursor.module.css";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.animatedCursor}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default AnimatedCursor;
