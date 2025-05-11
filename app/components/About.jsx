import { assets, infoList, toolsData } from "@/assets/assets.js";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-29 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, sclae: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a self-taught full-stack web developer with a strong foundation
            in the MERN stack (MongoDB, Express.js, React, Node.js) and hands-on
            experience working with modern frameworks like React.js. Since
            completing my Bacherlor's, I’ve built and deployed
            various real-world projects including Freelance Marketplce and E-Commerce websites and several mini projects. I follow best practice on
            clean, scalable code and
            maintainability. I'm also experienced with Firebase, Tailwind CSS,
            and Git. I'm passionate about continuous learning, improving my
            problem-solving skills, and strengthening my communication abilities
            to grow as a confident and effective developer.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                    transition-all duration-300 hover:shadow-lg hover:border-gray-600 
                    hover:-translate-y-1 hover:bg-gray-50 group"
              >
                <Image
                  className="w-7 mt-3 transition-transform group-hover:scale-110"
                  src={icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 group-hover:text-black">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;