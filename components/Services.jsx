'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import BrandMgtImg from '../assets/brand-mgt.svg';

const ServiceCard = ({ title, description, imageSrc }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="bg-[#0D1827] rounded-[30px] mb-6 shadow-md px-8 py-12 mx-auto w-[80%] md:w-[100%] text-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div 
        className="w-6 h-6 mb-4 mx-auto"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          className="rounded-t-lg"
        />
      </motion.div>
      <motion.h3 
        className="text-[22px] font-semibold mb-2 bg-gradient-to-b from-[#4CFFD6] to-[#4C80FF] text-transparent bg-clip-text"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-[14px] text-[#C1BFBF] md:text-[16px]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Brand management",
      description: "We build and maintain your brand's identity, enhancing visibility and audience connection.",
      imageSrc: BrandMgtImg
    },
    {
      title: "Product design",
      description: "We create intuitive and visually engaging designs that resonate with your users.",
      imageSrc: BrandMgtImg
    },
    {
      title: "Product development",
      description: "We bring ideas to life with innovative products aligned with market needs.",
      imageSrc: BrandMgtImg
    },
    {
      title: "Data analysis",
      description: "We turn data into actionable insights to support informed decision-making.",
      imageSrc: BrandMgtImg
    },
    {
      title: "Product management",
      description: "We manage your product's lifecycle, ensuring market success and user satisfaction.",
      imageSrc: BrandMgtImg
    },
    {
      title: "IT consulting",
      description: "We offer expert guidance to optimize your IT infrastructure and drive business growth.",
      imageSrc: BrandMgtImg
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoSwipeInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    // Pause auto-swipe on touch start
    clearInterval(autoSwipeInterval.current);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    // Resume auto-swipe on touch end
    startAutoSwipe();
  };

  const startAutoSwipe = () => {
    // Clear any existing interval
    if (autoSwipeInterval.current) {
      clearInterval(autoSwipeInterval.current);
    }
    // Set new interval
    autoSwipeInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    startAutoSwipe();

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(autoSwipeInterval.current);
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="mx-auto mt-16 mb-6 px-3 py-6 md:pt-10 md:pb-8 bg-[#050D18]"
      id='our-services'
      initial="hidden"
      whileInView="visible"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl text-[#F9F9F9] font-bold text-center mb-2 md:text-[64px]"
        variants={itemVariants}
      >
        Our services
      </motion.h1>
      <motion.h2 
        className="text-[12px] text-gray-600 text-center mb-6 md:mb-8 md:mt-4 md:text-[20px]"
        variants={itemVariants}
      >
        Empowering Your Business with Cutting-Edge Tech Solutions
      </motion.h2>
      
      <motion.div 
        className="relative max-w-sm mx-auto"
        variants={itemVariants}
      >
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="w-full flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="flex justify-center mt-4"
        variants={itemVariants}
      >
        {services.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              startAutoSwipe();
            }}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;