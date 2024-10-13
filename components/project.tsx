"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 last:mb-0 max-w-[400px] mx-auto"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden shadow-lg transition hover:bg-gray-200 hover:shadow-xl dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Image Section */}
        <div className="relative w-full h-[200px]">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            fill
            objectFit="cover"
            quality={95}
            className="
              transition-all duration-500
              group-hover:scale-105
              rounded-t-lg
            "
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700 dark:text-white/70">{description}</p>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wide text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
