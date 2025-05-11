import Image from "next/image";
import React from "react";
import { assets, serviceData } from "../../assets/assets";
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-background"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-primary"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo text-foreground"
      >
        My Services
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-border rounded-lg px-6 sm:px-8 py-8 sm:py-12 
              hover:shadow-xl hover:bg-accent cursor-pointer 
              hover:-translate-y-1 duration-500 group"
            key={index}
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              width={40}
              height={40}
              unoptimized
              className="w-10 sm:w-12 transition-transform group-hover:scale-110 dark:invert"
            />

            <h3 className="text-lg my-4 text-foreground group-hover:text-primary font-semibold">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-5 mb-4">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
