"use client";

import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // ANGKA KECEPATAN: 0.2 atau 0.3 membuat ring mengejar dengan sangat cepat
      // Semakin mendekati angka 1, semakin tidak ada delay.
      position.current.x += (mouse.current.x - position.current.x) * 0.2;
      position.current.y += (mouse.current.y - position.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Ring: Hapus transition 1s agar tidak ada delay buatan */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9999] max-md:hidden"
        style={{
          // Gunakan durasi sangat pendek atau hapus sama sekali
          transition: "transform 0.1s",
        }}
      />

      {/* Dot: Harus 100% instan */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] max-md:hidden"
      />
    </>
  );
};

export default Cursor;
