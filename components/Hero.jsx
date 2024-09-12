"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavItem = ({ href, children, active }) => (
  <a
    href={href}
    className={`block py-2 px-4 text-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
      active ? 'border-b-2 border-blue-700' : ''
    }`}
  >
    {children}
  </a>
);

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About us', 'Our services', 'Contact us', 'Reviews'];

  return (
    <div className="bg-hero">
      <nav className="shadow-md">
        {/* Navbar content (unchanged) */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger menu */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring shadow-md"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/assets/logo.jpg" alt="Logo" />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.slice(0, 3).map((item) => (
                <NavItem
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  active={activeItem === item}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </NavItem>
              ))}
            </div>

            {/* Logo for larger screens */}
            <div className="hidden md:flex md:items-center">
              <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Logo" />
            </div>

            {/* Desktop menu (continued) and button */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.slice(3).map((item) => (
                <NavItem
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  active={activeItem === item}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </NavItem>
              ))}
              <button className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-white font-bold px-4 py-2 rounded-3xl text-md hover:cursor-pointer transition-colors">
                Work with us
              </button>
            </div>

            {/* Mobile "Work with us" button */}
            <div className="flex md:hidden">
              <button className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-white font-bold px-4 py-2 rounded-3xl text-md hover:cursor-pointer transition-colors">
                Work with us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-25 backdrop-blur-sm">
            <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-5 right-5 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring"
                >
                  <X size={24} />
                </button>
                <nav className="mt-8">
                  {navItems.map((item) => (
                    <NavItem
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      active={activeItem === item}
                      onClick={() => {
                        setActiveItem(item);
                        setIsMenuOpen(false);
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
      <div className="max-w-6xl mx-auto px-4 py-18">
        <h1 className="text-[38px] md:text-5xl font-bold text-[#F9F9F9]">
          Innovating the future,
        </h1>
        <h1 className="text-[32px] md:text-5xl font-bold text-[#4C80FF]">one solution at a time</h1>
        <p className="text-xl md:text-2xl text-[#C1BFBF] max-w-3xl mx-auto">
          Bridging ideas with innovation, we redefine possibilities to turn your vision into <span className="text-[#4C80FF]">reality</span>. 
          Partner with us to unlock new levels of efficiency and growth.
        </p>
      </div>
    </div>
  );
};

export default Hero;