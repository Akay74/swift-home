"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import placeholderImg from '../assets/placeholder.jpg';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
  <div className="rounded-lg shadow-lg p-5 border-[1px] border-[#4C80FF] w-[48%]">
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
    <h3 className="text-l font-semibold mb-2">{feedback.name}</h3>
    <p className="text-[#C1BFBF] text-sm">{feedback.comment}</p>
  </div>
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

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 2) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 2 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#F9F9F9] mb-2">Our Customer Feedback</h2>
        <p className="text-[14px] text-[#C1BFBF] text-center mb-12">Don't take our word for it. Trust our customers.</p>

        <div className="flex justify-between">
          <FeedbackCard feedback={feedbacks[currentIndex]} />
          <FeedbackCard feedback={feedbacks[(currentIndex + 1) % feedbacks.length]} />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={prevFeedback}
            className="bg-blue-500 text-white p-2 rounded-full mr-2 hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextFeedback}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;