"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import HeroImg from '../assets/hero.jpg';
import HamImg from '../assets/hamburger.png';
import Logo from '../assets/logo.png';

const NavItem = ({ href, children, active, onClick }) => (
  <a
    href={href}
    className={`block py-2 px-4 text-lg md:border-b-0 md:hover:border-b-[3px] md:border-solid md:hover:border-[#F9F9F9] md:hover:text-[#F9F9F9] md:p-0 ${
      active ? 'border-b-2 border-[#F9F9F9]' : ''
    }`}
    onClick={onClick}
  >
    {children}
  </a>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About us', 'Our services', 'Contact us', 'Reviews'];

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);

    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative md:px-[4rem] md:pb-[13rem] bg-hero pb-12' id='home'>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImg}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <nav>
          {/* Navbar content (unchanged) */}
          <div className="max-w-6xl mx-auto px-4 md:py-2">
            <div className="flex justify-between items-center h-16">
              {/* Hamburger menu */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring shadow-md"
                >
                  <Image src={HamImg} width={24} height={24} alt="Menu" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-top ml-14 md:hidden">
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
              
              <button className="hidden md:flex bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] shadow-md text-white font-[24px] font-bold px-4 py-3 rounded-[30px] text-md hover:cursor-pointer transition-colors"
                onClick={() => handleNavItemClick('Contact us')}
              >
                WORK WITH US
              </button>

              {/* Mobile "Work with us" button */}
              <div className="flex md:hidden">
                <button className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-white font-bold px-1.5 py-1.5 rounded-3xl text-sm hover:cursor-pointer transition-colors"
                  onClick={() => handleNavItemClick('Contact us')}
                >
                  Work with us
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-25 backdrop-blur-sm">
              <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F9F9F9] bg-opacity-5 shadow-xl overflow-y-auto">
                <div className="p-6">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-5 right-5 text-[#C1BFBF] hover:text-[#F9F9F9] focus:outline-none focus:ring"
                  >
                    <X size={24} />
                  </button>
                  <nav className="mt-8 text-[#F9F9F9]">
                    {navItems.map((item) => (
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
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Hero Section */}
        <div className="max-w-6xl mt-2 md:mt-[5rem] px-4 py-18">
          <h1 className="text-[38px] md:text-[96px] md:font-normal md:leading-[5rem] font-bold text-[#F9F9F9]">
            Innovating the future,
          </h1>
          <h1 className="text-[32px] md:text-[80px] font-bold bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-transparent bg-clip-text">one solution at a time</h1>
          <p className="text-md md:text-[23px] text-[#C1BFBF] max-w-3xl">
            Bridging ideas with innovation, we redefine possibilities to turn your vision into <span className="text-[#4C80FF]">reality</span>. 
            Partner with us to unlock new levels of efficiency and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;