"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center px-4 sm:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-lg">
        Reach out directly via{" "}
        <a
          className="underline hover:text-gray-400 transition-all"
          href="mailto:example@gmail.com"
        >
          example@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-10 flex flex-col items-center dark:text-black space-y-5"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 w-full max-w-lg px-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md focus:shadow-lg transition-shadow duration-300 ease-in-out dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 w-full max-w-lg px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md focus:shadow-lg transition-shadow duration-300 ease-in-out dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
