import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the CSS file
// import AnimatedElements from "../Animations/AnimatedElements";
import sliderImages1 from "../../assets/Images/slider banner/sliderImg (1).jpeg";
import sliderImages2 from "../../assets/Images/slider banner/sliderImg (2).jpeg";
import sliderImages3 from "../../assets/Images/slider banner/sliderImg (3).jpeg";
import sliderImages4 from "../../assets/Images/slider banner/sliderImg (4).jpeg";

const Carousel = () => {
  const images = [sliderImages1, sliderImages2, sliderImages3, sliderImages4,];

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
    <div className="carousel">
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

      {/* <AnimatedElements /> */}
     
    </div>
  );
};

export default Carousel;
