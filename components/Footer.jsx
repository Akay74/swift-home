'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Logo from '../assets/logo.png';
import LinkedinIcon from '../assets/Linkedin.svg';
import InstagramIcon from '../assets/Ig.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/X.svg';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'Our Services', 'About us', 'Contact us', 'Reviews'];
  const socialIcons = [
    { Icon: LinkedinIcon, href: '#' },
    { Icon: InstagramIcon, href: '#' },
    { Icon: FacebookIcon, href: '#' },
    { Icon: TwitterIcon, href: '#' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="py-8 border-t-[1px] border-[#4C80FF]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 text-sm text-[#C1BFBF]">
        {/* Logo */}
        <motion.div className="flex justify-center mb-3" variants={itemVariants}>
          <Image src={Logo} alt="Logo" width={160} height={120} />
        </motion.div>

        {/* Navigation */}
        <motion.nav className="flex justify-center text-[13.8px] md:text-[16px] space-x-2 mb-3 md:space-x-12" variants={itemVariants}>
          {navItems.map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-gray-600"
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase().replace(' ', '-'))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <motion.div className="flex justify-center space-x-6 mb-3" variants={itemVariants}>
          {socialIcons.map(({ Icon, href }) => (
            <motion.a 
              key={href} 
              href={href} 
              className="text-[#C1BFBF] hover:text-gray-600"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={Icon} alt="Social Icon" width={22} height={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div className="flex justify-between items-center space-x-4 md:w-[30%] md:mx-auto" variants={itemVariants}>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={20} className="mr-2" />
            <span>SwiftTech@gmail.com</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={20} className="mr-2" />
            <span>+234 7012222764</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;