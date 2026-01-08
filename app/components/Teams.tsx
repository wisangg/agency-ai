"use client";

import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

// Interface agar TypeScript tidak komplain
interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "Haley Carter",
    title: "CEO & founder",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "James Walker",
    title: "Ads manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    name: "Jessica Morgan",
    title: "Vice president",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Ashley Bennett",
    title: "Marketing & sales",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Emily Parker",
    title: "Content marketer",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Ryan Mitchell",
    title: "Content writer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Megan Brooks",
    title: "Performance manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Amber Foster",
    title: "Senior writer",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

const Teams = () => {
  return (
    <div
      id="Teams"
      className="flex flex-col items-center gap-7 px-4 py-24 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      {/* Grid Layout - Motion dipindahkan ke dalam .map agar index terbaca */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            // Gaya motion sesuai permintaanmu
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white
            dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
            hover:scale-105 transition-all duration-400 cursor-default"
          >
            {/* Foto Profil */}
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              {/* Nama & Title */}
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs opacity-60">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teams;