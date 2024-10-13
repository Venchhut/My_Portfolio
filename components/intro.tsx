"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaGitlab } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-between text-left max-w-[1200px] mx-auto "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side: Introduction and Quote */}
        <div className="md:w-2/3 mb-10 md:mb-0 text-left">
          <motion.h1
            className="text-4xl font-extrabold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi there<span className="text-yellow-500">!</span>
          </motion.h1>

          <p className="mt-4 text-lg">
            I'm a web developer.I describe myself as a passionate developer who
            loves coding and always learning about new technologies.
          </p>

          <p className="mt-4 text-lg">
            In my spare time, I often listen to music, play games, watch anime,
            or learn new technologies.
          </p>

          <blockquote className="mt-4 italic text-gray-400">
            “Debugging becomes significantly easier if you first admit that you
            are the problem.”
          </blockquote>

          {/* Social Icons */}
          <div className="flex gap-10 mt-10">
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook
                size={30}
                className="text-gray-600 hover:text-gray-900"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ven-chhut-857534293/"
              target="_blank"
            >
              <BsLinkedin
                size={30}
                className="text-gray-600 hover:text-gray-900"
              />
            </a>
            <a href="https://github.com/Venchhut" target="_blank">
              <FaGithubSquare
                size={30}
                className="text-gray-600 hover:text-gray-900"
              />
            </a>
            <a href="https://gitlab.com" target="_blank">
              <FaGitlab
                size={30}
                className="text-gray-600 hover:text-gray-900"
              />
            </a>
          </div>

          {/* Download Button */}
          <Link
            href="/CV.pdf"
            download
            className="inline-flex items-center mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full hover:scale-105 transition"
          >
            Download Resume
            <HiDownload className="ml-2" />
          </Link>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="relative"
          >
            {/* Hexagon Image */}
            <div className="relative w-60 h-60">
              <div className="hexagon relative w-full h-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1723764881665-5b40cea01c9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Portfolio Image"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>

            {/* CSS for hexagon */}
            <style jsx>{`
              .hexagon {
                clip-path: polygon(
                  50% 0%,
                  93% 25%,
                  93% 75%,
                  50% 100%,
                  7% 75%,
                  7% 25%
                );
                background-color: white;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }

              .hexagon:hover {
                transform: scale(1.05);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
              }
            `}</style>

            {/* Title */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                FullStack Developer
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
