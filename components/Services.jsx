import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ServiceCard = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-sm">
    <div className="relative w-full h-48 mb-4">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Brand management",
      description: "We build and maintain your brand's identity, enhancing visibility and audience connection.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Product design",
      description: "We create intuitive and visually engaging designs that resonate with your users.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Product development",
      description: "We bring ideas to life with innovative products aligned with market needs.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Data analysis",
      description: "We turn data into actionable insights to support informed decision-making.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "Product management",
      description: "We manage your product's lifecycle, ensuring market success and user satisfaction.",
      imageSrc: "/api/placeholder/400/300"
    },
    {
      title: "IT consulting",
      description: "We offer expert guidance to optimize your IT infrastructure and drive business growth.",
      imageSrc: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <h2 className="text-xl text-gray-600 text-center mb-12">
        Empowering Your Business with Cutting-Edge Tech Solutions
      </h2>
      
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        className="max-w-sm mx-auto"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Carousel>
    </div>
  );
};

export default Services;