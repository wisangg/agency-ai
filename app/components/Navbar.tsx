"use client";

import React from "react";
import Image from "next/image";
import assets from "@/lib/assets";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion"; // Import motion

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const closeMenu = () => setSidebarOpen(false);

  return (
    // Mengganti nav menjadi motion.nav untuk animasi masuk
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0 z-50 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 py-4 transition-colors duration-300"
    >
      {/* 1. LOGO */}
      <Image
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Logo Agency"
        width={130}
        height={40}
        className="w-32 sm:w-40 cursor-pointer"
      />

      {/* 2. BAGIAN MENU (Desktop & Mobile Sidebar) */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-500`}
      >
        <Image
          onClick={closeMenu}
          src={assets.close_icon}
          alt="Close Icon"
          width={20}
          height={20}
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
        />

        <a
          href="#Hero"
          className="sm:hover:border-b border-primary"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#Services"
          className="sm:hover:border-b border-primary"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#Our-Work"
          className="sm:hover:border-b border-primary"
          onClick={closeMenu}
        >
          Our Work
        </a>
        <a
          href="#Contact-Us"
          className="sm:hover:border-b border-primary"
          onClick={closeMenu}
        >
          Contact Us
        </a>
      </div>

      {/* 3. BAGIAN TOMBOL */}
      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <a
          href="#Contact-Us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all text-sm"
        >
          Connect
          <Image
            src={assets.arrow_icon}
            alt="Arrow Icon"
            width={14}
            height={14}
          />
        </a>

        <Image
          onClick={() => setSidebarOpen(true)}
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu Icon"
          width={25}
          height={25}
          className="w-8 sm:hidden cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
