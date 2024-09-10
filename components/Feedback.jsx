"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          fill={i < rating ? "#FFD700" : "none"}
          stroke={i < rating ? "#FFD700" : "#CBD5E0"}
        />
      ))}
    </div>
  );
};

const Feedback = () => {
  const feedbacks = [
    {
      name: "John Doe",
      image: "/../assets/placeholder.jpg",
      rating: 5,
      comment: "Exceptional service! Their innovative solutions have truly transformed our business operations."
    },
    {
      name: "Jane Smith",
      image: "/../assets/placeholder.jpg",
      rating: 4,
      comment: "Very impressed with their professionalism and the quality of their work. Highly recommended!"
    },
    {
      name: "Bob Johnson",
      image: "/../assets/placeholder.jpg",
      rating: 5,
      comment: "Their team went above and beyond our expectations. We're already seeing great results!"
    }
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Customer Feedback</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Don't take our word for it. Trust our customers.</p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src={feedbacks[currentFeedback].image}
                alt={feedbacks[currentFeedback].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <StarRating rating={feedbacks[currentFeedback].rating} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feedbacks[currentFeedback].name}</h3>
          <p className="text-gray-600 mb-6">{feedbacks[currentFeedback].comment}</p>
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