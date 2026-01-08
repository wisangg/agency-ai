"use client";

import React from "react";
import Title from "./Title";
import assets from "@/lib/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const toastId = toast.loading("Sending your message...");

    const formData = new FormData(form);
    formData.append("access_key", "f4cd2232-d8d8-4f26-ac9d-eae66ce2b1aa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!", { id: toastId });
        form.reset();
      } else {
        toast.error(data.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.", { id: toastId });
    }
  };

  return (
    <div
      id="Contact-Us"
      className="flex flex-col items-center gap-7 px-4 py-24 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move business forward."
      />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Input Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
            <img src={assets.person_icon} alt="" className="w-4" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </motion.div>

        {/* Input Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
            <img src={assets.email_icon} alt="" className="w-4" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="sm:col-span-2"
        >
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 resize-none"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <button
            type="submit"
            className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Submit <img src={assets.arrow_icon} alt="" className="w-3" />
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default ContactUs;