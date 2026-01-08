"use client";

import React, { useState, useRef } from "react"; // Tambahkan useRef
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  // 1. Buat referensi untuk div kartu
  const divRef = useRef<HTMLDivElement>(null);

  // 2. Fungsi untuk menghitung posisi kursor relatif terhadap kartu
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    // Mendapatkan posisi/batas (bounds) kartu di layar
    const bounds = divRef.current.getBoundingClientRect();

    // Set posisi dengan mengurangi posisi mouse (clientX) dengan batas kiri kartu
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      ref={divRef} // 3. Pasang referensi di sini
      onMouseMove={handleMouseMove} // 4. Pasang handler gerakan mouse
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
      border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100
      dark:shadow-white/10"
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full
    bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 
    /* PERBAIKAN DI SINI: */
    mix-blend-multiply dark:mix-blend-lighten
    ${visible ? "opacity-70" : "opacity-0"}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      ></div>

      <div
        className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5
      transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative"
      >
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full flex-shrink-0">
          <img
            src={service.icon}
            alt={service.title}
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-800 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
