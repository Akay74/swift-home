'use client'

import React from 'react';
import Image from 'next/image';
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

  return (
    <footer className="py-8 border-t-[1px] border-[#4C80FF]">
      <div className="max-w-6xl mx-auto px-4 text-sm text-[#C1BFBF]">
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image src={Logo} alt="Logo" width={160} height={120} />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-2.5 mb-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gray-600">
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-3">
          {socialIcons.map(({ Icon, href }) => (
            <a key={href} href={href} className="text-[#C1BFBF] hover:text-gray-600">
              <Image src={Icon} alt="Social Icon" width={22} height={22} />
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center">
            <Mail size={20} className="mr-2" />
            <span>SwiftTech@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone size={20} className="mr-2" />
            <span>+234 7012222764</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;