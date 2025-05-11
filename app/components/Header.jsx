import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FiDownload } from "react-icons/fi"
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16 bg-background">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="mb-8">
        <Image
          src={assets.profile_img}
          alt='Profile'
          className='rounded-full w-32 h-32 object-cover border-4 border-background shadow-lg'
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-4 font-Ovo text-foreground'>
        Hi! I am Vishnu VP
        <Image src={assets.hand_icon} alt='profile' className='w-6 h-6 animate-wave' />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight mb-6 text-foreground'>
        MERN Stack developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className='max-w-2xl mx-auto font-Ovo text-muted-foreground mb-8 leading-relaxed'>
        "Motivated wb developer with a strong foundation in MERN stack development.
        Proven ability to deliver user-centric applications, collaborate with teams,
        and adapt quickly to new technologies and frameworks."
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-primary rounded-full bg-primary text-primary-foreground 
                flex items-center gap-2 hover:bg-primary/90 transition-colors duration-300'
        >
          Contact me
          <FaArrowRightLong  className='w-4 h-4' />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Vishnu_VP_Resume.pdf"
          download
          className='px-10 py-3 border rounded-full border-border 
                flex items-center gap-2 hover:bg-accent transition-colors duration-300
                text-foreground'
        >
          My resume
          <FiDownload  className='w-4 h-4' />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Header