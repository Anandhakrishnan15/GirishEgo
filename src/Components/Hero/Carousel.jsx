import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the CSS file

const Carousel = () => {
  const images = [
  "adfadasdas",
  'asdasdasdas',
  'asdasdas',
  'asdasdasd',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel" style={{zIndex:'-1'}}>
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      {/* Buttons */}
      <button onClick={handlePrev} className="carousel-button prev-button">
        Previous
      </button>
      <button onClick={handleNext} className="carousel-button next-button">
        Next
      </button>
    </div>
  );
};

export default Carousel;
