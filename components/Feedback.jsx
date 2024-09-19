"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import placeholderImg from '../assets/placeholder.jpg';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < rating ? "#C68635" : "none"}
          stroke={i < rating ? "#C68635" : "#C68635"}
        />
      ))}
    </div>
  );
};

const FeedbackCard = ({ feedback }) => (
  <motion.div 
    className="rounded-lg shadow-lg p-5 border-[1px] border-[#4C80FF] w-[48%]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-top mb-4">
      <div className="w-8 h-8 relative mr-4">
        <Image
          src={feedback.image}
          alt={feedback.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <StarRating rating={feedback.rating} />
    </div>
    <h3 className="text-l text-[#F9F9F9] font-semibold mb-2">{feedback.name}</h3>
    <p className="text-[#C1BFBF] text-sm">{feedback.comment}</p>
  </motion.div>
);

const Feedback = () => {
  const feedbacks = [
    {
      name: "John Doe",
      image: placeholderImg,
      rating: 5,
      comment: "Exceptional service! Their innovative solutions have truly transformed our business operations."
    },
    {
      name: "Jane Smith",
      image: placeholderImg,
      rating: 4,
      comment: "Very impressed with their professionalism and the quality of their work. Highly recommended!"
    },
    {
      name: "Bob Johnson",
      image: placeholderImg,
      rating: 5,
      comment: "Their team went above and beyond our expectations. We're already seeing great results!"
    },
    {
      name: "Alice Brown",
      image: placeholderImg,
      rating: 4,
      comment: "Great experience working with this team. They're responsive and deliver quality results."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 2) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 2 + feedbacks.length) % feedbacks.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="pt-10 pb-20" 
      id='reviews'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-[#F9F9F9] mb-2 md:mb-6 md:text-[64px]"
          variants={itemVariants}
        >
          Our Customer Feedback
        </motion.h2>
        <motion.p 
          className="text-[14px] text-[#C1BFBF] text-center mb-12 md:text-[20px]"
          variants={itemVariants}
        >
          Don&apos;t take our word for it. Trust our customers.
        </motion.p>

        <motion.div 
          className="flex justify-between mb-8"
          variants={itemVariants}
        >
          <FeedbackCard feedback={feedbacks[currentIndex]} />
          <FeedbackCard feedback={feedbacks[(currentIndex + 1) % feedbacks.length]} />
        </motion.div>

        <motion.div 
          className="flex justify-center mb-4"
          variants={itemVariants}
        >
          {[...Array(feedbacks.length / 2)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mx-1 ${
                i === currentIndex / 2 ? 'bg-[#4C80FF]' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-end space-x-2"
          variants={itemVariants}
        >
          <motion.button
            onClick={prevFeedback}
            className="flex text-[#C1BFBF] px-3 py-1 rounded-md border border-[#C1BFBF] hover:border-[#F9F9F9] hover:text-[#F9F9F9] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} /> Previous
          </motion.button>
          <motion.button
            onClick={nextFeedback}
            className="flex text-[#C1BFBF] px-3 py-1 rounded-md border border-[#C1BFBF] hover:border-[#F9F9F9] hover:text-[#F9F9F9] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feedback;