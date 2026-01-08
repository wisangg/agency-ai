"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const Page = () => {
  // 1. Inisialisasi tanpa nilai default agar tidak terjadi perbedaan antara server dan client (hydration)
  const [theme, setTheme] = useState("");

  // 2. Mengambil data dari localStorage saat pertama kali aplikasi dijalankan
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // Jika belum ada di storage, default ke light
    }
  }, []);

  // 3. Menyimpan ke localStorage dan merubah class HTML setiap kali state 'theme' berubah
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <div 
    suppressHydrationWarning
    className="dark:bg-black min-h-screen relative transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default Page;
