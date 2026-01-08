"use client";

import React from "react";
import assets from "@/lib/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const ServicesData = [
  {
    icon: assets.ads_icon,
    title: "Advertising",
    description:
      "We turn bold ideas into powerful digital solutions that connect, engage...",
  },
  {
    icon: assets.marketing_icon,
    title: "Content Marketing",
    description: "We help you execute your plan and deliver results.",
  },
  {
    icon: assets.content_icon,
    title: "Content Writing",
    description: "We help you create a marketing strategy that drives results.",
  },
  {
    icon: assets.social_icon,
    title: "Social Media",
    description:
      "We help you build a strong social media presence and engage with your audience.",
  },
];

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="Services"
      className="relative flex flex-col items-center gap-12 px-4 py-24 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <Title
        title="How can we help?"
        desc="From strategy to execution we craft solutions that move your business forward."
      />

      {/* Grid Layout - 2 Kolom di Desktop sesuai tutorial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl">
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
