'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PlaceholderImg from '../assets/placeholder.jpg';
import BrandMgtImg from '../assets/brand-mgt.svg';

const ServiceCard = ({ title, description, imageSrc }) => (
  <div className="bg-[#0D1827] rounded-[30px] mb-6 shadow-md px-8 py-12 mx-auto w-[80%] md:w-[100%] text-center">
    <div className="w-6 h-6 mb-4 mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <h3 className="text-[22px] font-semibold mb-2 bg-gradient-to-b from-[#4CFFD6] to-[#4C80FF] text-transparent bg-clip-text">{title}</h3>
    <p className="text-[14px] text-[#C1BFBF] md:text-[16px]">{description}</p>
  </div>
);

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
  }, [services.length]);

  return (
    <div className="mx-auto mt-16 mb-6 px-3 py-6 md:pt-10 md:pb-8 bg-[#050D18]" id='our-services'>
      <h1 className="text-3xl text-[#F9F9F9] font-bold text-center mb-2 md:text-[64px]">Our services</h1>
      <h2 className="text-[12px] text-gray-600 text-center mb-6 md:mb-8 md:mt-4 md:text-[20px]">
        Empowering Your Business with Cutting-Edge Tech Solutions
      </h2>
      
      <div className="relative max-w-sm mx-auto">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              // Restart auto-swipe when manually changing slides
              startAutoSwipe();
            }}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;