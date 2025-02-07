import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the CSS file
// import AnimatedElements from "../Animations/AnimatedElements";
// import sliderImages1 from "../../assets/Images/slider banner/imgs (1).webp";
// import sliderImages2 from "../../assets/Images/slider banner/imgs (1).jpg";
// import sliderImages3 from "../../assets/Images/slider banner/imgs (2).jpg";
import sliderImages4 from "../../assets/Images/slider banner/imgs (4).png";

const Carousel = () => {
  const images = [
    "https://www.alliedmarketresearch.com/InsightsImages/banner-1-C-2024-07-09-1720532573.webp",
    "https://t3.ftcdn.net/jpg/09/35/11/38/360_F_935113876_ZuJdvJbR8Vgn1lgNgvYk5kMCstzl4IZD.jpg",
    "https://vijaytransformers.com/images/main-slider/1.jpg",
    sliderImages4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

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
      {/* <button onClick={handlePrev} className="carousel-button prev-button">
        Previous
      </button>
      <button onClick={handleNext} className="carousel-button next-button">
        Next
      </button> */}

      {/* <AnimatedElements /> */}
    </div>
  );
};

export default Carousel;
