import React, { useState } from 'react';

const CardCarousel = ({ classes }) => {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(cards.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(cards.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {classes.map((item, index) => (
         <div key={item.id}
         style={{ width: '250px' }}
         className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <h2 className="text-xl font-bold mt-4 h-16">{item.name}</h2>
              <p className="text-gray-700 h-24">{item.description}</p>
              </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default CardCarousel;