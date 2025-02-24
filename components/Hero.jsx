"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import HamImg from '../assets/hamburger.png';
import Logo from '../assets/aeisMiniLogonbg.png';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ href, children, active, onClick }) => (
  <motion.a
    href={href}
    className={`block py-2 px-4 text-lg md:border-b-0 md:hover:border-b-[3px] md:border-solid md:hover:border-[#F9F9F9] md:hover:text-[#F9F9F9] md:p-0 ${
      active ? 'border-b-2 border-[#F9F9F9]' : ''
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About us', 'Our services', 'Contact us', 'Reviews'];

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);

    // Smooth scroll to the section
    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const menuVariants = {
    closed: { x: "-100%" },
    open: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  return (
  <motion.div 
    className='m-3 md:m-5 rounded-t-[20px] bg-hero bg-cover bg-no-repeat md:bg-hero2 md:bg-center bg-opacity-[50%] bg-blend-normal md:px-[4rem] md:pb-[13rem] pb-12'
    id='home'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
      <nav>
        {/* Navbar content (unchanged) */}
        <div className="max-w-6xl mx-auto px-4 md:py-2">
          <div className="flex justify-between py-3">
            {/* Hamburger menu */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring"
              >
                <Image src={HamImg} alt='hamburger menu' size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-start ml-14 md:hidden">
              <Image className="h-6 w-auto" src={Logo} alt="Logo" />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:text-[#C1BFBF] md:flex md:items-center md:ml-[8rem] md:space-x-10">
              {navItems.slice(0, 3).map((item) => (
                <NavItem
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  active={activeItem === item}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item);
                  }}
                >
                  {item}
                </NavItem>
              ))}
            </div>

            {/* Logo for larger screens */}
            <div className="hidden md:flex md:items-center mx-5">
              <Image className="h-10 w-auto" src={Logo} alt="Logo" />
            </div>

            {/* Desktop menu (continued) and button */}
            <div className="hidden md:text-[#C1BFBF] md:flex md:items-center md:mr-[8rem] md:text[28px] md:space-x-10 text-[#F9F9F9]">
              {navItems.slice(3).map((item) => (
                <NavItem
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  active={activeItem === item}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item);
                  }}
                >
                  {item}
                </NavItem>
              ))}
            </div>
            
            <button className="hidden md:flex bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] shadow-2xl text-white font-[24px] font-bold px-4 py-3 rounded-full text-md hover:cursor-pointer transition-colors"
              onClick={() => handleNavItemClick('Contact us')}
            >
              WORK WITH US
            </button>

            {/* Mobile "Work with us" button */}
            <div className="flex md:hidden">
              <button className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] shadow-2xl text-white font-bold px-1.5 py-1.5 rounded-full text-sm hover:cursor-pointer transition-colors"
                onClick={() => handleNavItemClick('Contact us')}
              >
                Work with us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-25 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F9F9F9] bg-opacity-5 shadow-xl overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-5 right-5 text-[#C1BFBF] hover:text-[#F9F9F9] focus:outline-none focus:ring"
                >
                  <X size={24} />
                </button>
                <nav className="mt-8 text-[#F9F9F9]">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      custom={index}
                      variants={menuItemVariants}
                    >
                      <NavItem
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        active={activeItem === item}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavItemClick(item);
                        }}
                      >
                        {item}
                      </NavItem>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Main Hero Section */}
      <motion.div
        className="max-w-6xl mt-2 md:mt-[5rem] px-4 py-18"
        variants={containerVariants}
      >
        <motion.h1
          className="text-[38px] md:text-[96px] md:font-normal md:leading-[5rem] font-bold text-[#F9F9F9]"
          variants={itemVariants}
        >
          Innovating the future,
        </motion.h1>
        <motion.h1
          className="text-[32px] md:text-[80px] font-bold bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-transparent bg-clip-text"
          variants={itemVariants}
        >
          one solution at a time
        </motion.h1>
        <motion.p
          className="text-md md:text-[23px] text-[#C1BFBF] max-w-3xl"
          variants={itemVariants}
        >
          Bridging ideas with innovation, we redefine possibilities to turn your vision into <span className="text-[#4C80FF]">reality</span>. 
          Partner with us to unlock new levels of efficiency and growth.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;