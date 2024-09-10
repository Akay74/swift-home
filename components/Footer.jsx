import React from 'react';
import Image from 'next/image';
import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'Our Services', 'About us', 'Contact us', 'Reviews'];
  const socialIcons = [
    { Icon: Linkedin, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/api/placeholder/80/40" alt="Logo" width={80} height={40} />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-6 mb-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900">
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialIcons.map(({ Icon, href }) => (
            <a key={href} href={href} className="text-gray-600 hover:text-gray-900">
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex justify-center items-center space-x-6 text-gray-600">
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