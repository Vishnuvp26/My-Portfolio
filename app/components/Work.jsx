import { assets, workData } from "@/assets/assets";
import { FaGithub } from "react-icons/fa";
import { TbDeviceIpadHorizontalShare } from "react-icons/tb";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "motion/react"

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const workRef = useRef(null);

  const visibleProjects = showAll ? workData : workData.slice(0, 8);

  const handleViewLess = () => {
    setShowAll(false);
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      <h4 ref={workRef} className="text-center mb-2 text-lg font-Ovo text-gray-700">
      </h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 20, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo mb-6"
      >
        My Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed"
      >
        I've built various projects user-friendly interfaces with modern features and
        clean designs.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10"
>
        {visibleProjects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden border dark:border-gray-700 border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            key={index}
          >
            {/* Project Image with dark overlay on hover */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
        
            {/* Info Card */}
            <div className="p-4">
              <h3 className="font-semibold text-base sm:text-lg truncate mb-1">
                {project.title}
              </h3>
              <p className="text-sm dark:text-gray-500 mb-3 line-clamp-2">
                {project.description}
              </p>
        
              {/* Links */}
              <div className="flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm dark:text-blue-400 text-blue-600 hover:underline"
                  >
                    <TbDeviceIpadHorizontalShare className="w-4 h-4" />
                    Live
                  </a>
                )}
                {project.git && (
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline dark:text-white"
                  >
                    <FaGithub className="w-4 h-4 dark:text-white" />
                  
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {workData.length > 8 && !showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-center mt-6"
        >
          <button
            onClick={() => setShowAll(true)}
            className="inline-block px-6 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
          >
            View More
          </button>
        </motion.div>
      )}

      {/* View Less Button */}
      {showAll && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewLess}
            className="inline-block px-6 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
          >
            View Less
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Work;