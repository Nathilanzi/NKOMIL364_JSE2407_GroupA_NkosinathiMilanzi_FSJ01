// components/ProductCarousel.jsx
'use client'; // This tells Next.js this is a client-side component

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ProductCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="carousel relative mb-6">
      {/* Previous arrow button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      {/* Current image */}
      <img src={images[currentImageIndex]} alt={`Product Image ${currentImageIndex + 1}`} className="w-full h-96 object-cover rounded" />

      {/* Next arrow button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
