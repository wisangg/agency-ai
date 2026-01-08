"use client";

import React from "react";
import assets from "@/lib/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }: { theme: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-16 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 pb-10"
    >
      {/* Footer Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        {/* Left Side: Logo & Links */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-32 sm:w-44"
          />

          <p className="max-w-md text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li>
              <a href="#Hero" className="hover:text-primary transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-primary transition-all">
                Services
              </a>
            </li>
            <li>
              <a href="#Our-Work" className="hover:text-primary transition-all">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Teams" className="hover:text-primary transition-all">
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#Contact-Us"
                className="hover:text-primary transition-all"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Side: Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-400 w-full lg:max-w-sm"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-primary transition-all"
            />
            <button className="bg-primary hover:opacity-90 text-white rounded px-6 py-2 text-sm transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-800 my-10" />

      {/* Footer Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex flex-col-reverse sm:flex-row justify-between items-center gap-6"
      >
        <p>© 2026 Agency-Ai Wesang. All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="w-5 h-5 cursor-pointer hover:scale-110 hover:opacity-70 transition-all"
          />
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="w-5 h-5 cursor-pointer hover:scale-110 hover:opacity-70 transition-all"
          />
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            className="w-5 h-5 cursor-pointer hover:scale-110 hover:opacity-70 transition-all"
          />
          <img
            src={assets.linkedin_icon}
            alt="LinkedIn"
            className="w-5 h-5 cursor-pointer hover:scale-110 hover:opacity-70 transition-all"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
