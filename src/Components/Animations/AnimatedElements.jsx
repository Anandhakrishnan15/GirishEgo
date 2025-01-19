import React, { useState, useEffect } from "react";
import "./AnimatedElements.css";
import floteImg4 from '../../assets/FlotingIcons/floteImg4.png';
import floteImg3 from "../../assets/FlotingIcons/floteImg3.png";
import floteImg2 from "../../assets/FlotingIcons/floteImg2.png";



const AnimatedElements = () => {
  const [elements, setElements] = useState([]);

  // Initializing the elements
  useEffect(() => {
    const initialElements = [
      { id: 1, type: "ball", size: "small", animation: "float" },
      { id: 2, type: "ball", size: "medium", animation: "pulse" },
      { id: 3, type: "ball", size: "large", animation: "rotate" },
      { id: 8, type: "ball", size: "small", animation: "float" },
      { id: 9, type: "ball", size: "medium", animation: "pulse" },
      { id: 10, type: "ball", size: "large", animation: "rotate" },
      {
        id: 4,
        type: "img",
        src: floteImg4,
        animation: "float",
      },
      {
        id: 5,
        type: "img",
        src: floteImg2,
        animation: "pulse",
      },
      {
        id: 6,
        type: "img",
        src: floteImg3,
        animation: "rotate",
      },
      {
        id: 7,
        type: "img",
        src: floteImg4,
        animation: "rotate",
      },
    ];
    setElements(initialElements);
  }, []);

  const getRandomLeft = () => {
    const random = Math.random();
    if (random < 0.5) {
      // 50% chance for the left side (0-11%)
      return Math.random() * 11;
    } else {
      // 50% chance for the right side (70-90%)
      return 80 + Math.random() * 15;
    }
  };

  const getRandomTop = () => 15 + Math.random() * 75; // Generate a value between 15% and 90%

  useEffect(() => {
    const interval = setInterval(() => {
      setElements((prevElements) =>
        prevElements.map((el) => ({
          ...el,
          top: `${getRandomTop()}vh`,
          left: `${getRandomLeft()}vw`,
          isVisible: false, // Start with disappearing
        }))
      );

      // Add a delay to make the elements reappear in their new positions
      setTimeout(() => {
        setElements((prevElements) =>
          prevElements.map((el) => ({
            ...el,
            isVisible: true, // Make the element reappear
          }))
        );
      }, 1000); // Wait for 1 second before making them visible again
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="animated-container">
      {elements.map((el) => {
        const commonStyle = {
          top: el.top || `${getRandomTop()}vh`,
          left: el.left || `${getRandomLeft()}vw`,
          opacity: el.isVisible ? 1 : 0, // Control visibility
          transition: "opacity 1s ease, top 1s ease, left 1s ease", // Smooth transition
        };

        if (el.type === "ball") {
          return (
            <div
              key={el.id}
              className={`ball ${el.size} ${el.animation}`}
              style={commonStyle}
            ></div>
          );
        }

        if (el.type === "img") {
          return (
            <img
              key={el.id}
              src={el.src}
              alt="Floating element"
              className={`animated-img ${el.animation}`}
              style={commonStyle}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default AnimatedElements;

