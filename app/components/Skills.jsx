import React from "react";
import Image from "next/image";
import { skillsData } from "@/assets/assets";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-Ovo mb-6"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-10">
        {skillsData.map((section, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {section.heading}
            </h3>

            {/* Skills Icons */}
            <ul className="flex justify-center flex-wrap items-center gap-3 sm:gap-5">
              {section.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex flex-col items-center justify-center w-16 sm:w-20 aspect-square 
                    bg-gradient-to-br dark:bg-neutral-800 
                    border border-gray-300 rounded-lg cursor-pointer 
                    hover:translate-y-1 transition-transform duration-300 shadow-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 sm:w-8"
                    width={32}
                    height={32}
                  />
                  <span className="mt-1 text-[10px] sm:text-xs text-center truncate">
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;