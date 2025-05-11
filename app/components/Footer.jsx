import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaGithub className="w-6 h-6" />, 
      link: "https://github.com/Vishnuvp26",
      name: "GitHub"
    },
    { 
      icon: <FaLinkedin className="w-6 h-6" />, 
      link: "https://www.linkedin.com/in/vishnu-v-p-9643281aa",
      name: "LinkedIn"
    },
    { 
      icon: <FaFacebook className="w-6 h-6" />, 
      link: "https://www.facebook.com/vishnu.vp.336",
      name: "Facebook"
    },
    { 
      icon: <FaInstagram className="w-6 h-6" />, 
      link: "https://www.instagram.com/vi_sh_nu_mohan?igsh=MThla2RweDMxZG9wYQ==",
      name: "Instagram"
    }
  ]

  return (
    <footer className="w-full bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Image 
              src={assets.logo} 
              alt="Logo" 
              className="w-28 mb-4 mx-auto md:mx-0 dark:invert" 
            />
            <p className="text-muted-foreground text-sm font-Ovo">
              Creating digital experiences with modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-Ovo text-lg mb-4 text-foreground">Connect With Me</h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 flex items-center justify-center rounded-full 
                    border-2 border-border hover:border-primary hover:bg-accent 
                    transition-all duration-300 hover:-translate-y-1 text-muted-foreground
                    hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishnu VP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer