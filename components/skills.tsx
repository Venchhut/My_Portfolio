"use client";

import React from "react";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiFlutter,
  SiCss3,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiJavascript,
} from "react-icons/si";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Skills() {
  const frontendFrameworks = [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Nuxt.js", icon: SiNuxtdotjs },
    { name: "Flutter", icon: SiFlutter },
    { name: "React Native", icon: SiReact },
  ];

  const frontendLanguages = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "CSS", icon: SiCss3 },
    { name: "Dart", icon: SiDart },
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Spring Boot", icon: SiSpring },
  ];

  // Framer Motion animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    hover: { scale: 1.05 },
  };

  return (
    <motion.section id="skills" className="max-w-7xl mx-auto  text-center">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Frontend Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Frontend Dev</h3>
          <h4 className="text-xl font-medium text-yellow-400 mb-4">
            Frameworks & Runtime
          </h4>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {frontendFrameworks.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center "
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <skill.icon className="text-5xl mb-4" />
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
          <h4 className="text-xl font-medium text-yellow-400 mb-4">
            Languages
          </h4>
          <div className="grid grid-cols-3 gap-6">
            {frontendLanguages.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <skill.icon className="text-5xl mb-4" />
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 ">Backend Dev</h3>
          <h4 className="text-xl font-medium text-yellow-400 mb-4">
            Frameworks & Runtime
          </h4>
          <div className="grid grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center "
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <skill.icon className="text-5xl mb-4" />
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
