"use client";

import React from "react";
import Image from "next/image";
import assets from "@/lib/assets";

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      <Image
        src={theme === "light" ? assets.moon_icon : assets.sun_icon}
        alt="Theme Toggle"
        width={22}
        height={22}
      />
    </button>
  );
};

export default ThemeToggle;
