"use client"

import React from "react";
import assets from "@/lib/assets";
import { motion } from "framer-motion"; // Import motion

const Header = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* 1. BADGE TRUSTED - Animasi Fade In & Slide Up */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 pl-1 pr-4 py-1 rounded-full bg-white/50 dark:bg-transparent dark:border-white/20"
      >
        <img
          src={assets.group_profile}
          alt="Trusted users"
          className="h-7 w-auto"
        />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      {/* 2. HEADLINE UTAMA - Animasi Slide Up dengan Delay */}
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay:0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      {/* 3. DESKRIPSI - Animasi Fade In dengan Delay lebih lama */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      {/* 4. HERO IMAGE - Animasi Scale Up (Zoom In halus) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl"
      >
        <img
          src={assets.hero_img}
          alt="Digital marketing illustration"
          className="w-full"
          loading="lazy"
        />
        
        {/* Background decoration */}
        <img
          src={assets.bgImage1}
          alt=""
          aria-hidden="true"
          className="absolute -top-40 -right-40 sm:-top-[400px] sm:-right-[280px] -z-10 dark:hidden pointer-events-none"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Header;