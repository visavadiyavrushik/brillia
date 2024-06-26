"use client";
import React, { useEffect, useRef, useState } from "react";

const CURSOR_COLORS = {
  h1: "green",
  button: "orange",
  default: "skyblue",
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("skyblue");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        style={{
          top: position.y,
          left: position.x,
          backgroundColor: cursorColor,
          width: "0.75rem",
          height: "0.75rem",
        }}
        ref={cursorRef}
        className="position-fixed pointer-events-none transition-all translate-middle z-50 ease-in duration-300 rounded-circle"
      />
      <div
        ref={cursorRef}
        className="position-fixed pointer-events-none transition-all translate-middle z-50 ease-in duration-500 rounded-circle border"
        style={{
          width: "2rem",
          height: "2rem",
          borderWidth: "2px",
          top: position.y,
          left: position.x,
          borderColor: cursorColor,
        }}
      >
        <div
          className={`position-fixed w-100 h-100 rounded-circle bg-${cursorColor} ease-in transition-all duration-500 -z-10 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
