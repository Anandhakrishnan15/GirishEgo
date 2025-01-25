import React, { useState } from "react";
import "./Card.css"; // Import CSS for styling
import { useNavigate } from "react-router";
import logo from "../../../../assets/Images/GEC Logo png.png";
import { TbArrowBigRight, TbArrowBigRightFilled } from "react-icons/tb";

const Cards = ({ productImg, heading, subProductsID, productId, pdric }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  console.log(subProductsID);
  console.log(productId);

  
  const handleSelect = () => {
    if ( subProductsID) {
      navigate(`/Products/${productId}/${subProductsID}`); // Navigate to sub-product page
    } else if (productId) {
      navigate(`/Products/${productId}`); // Navigate to product page
    }
  };
  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="card" onClick={handleSelect}>
      {/* Logo */}
      <div className="card-logo-container">
        <img src={logo} alt="Logo" className="card-logo" />
      </div>

      {/* Product Heading */}
      <div className="card-heading-container">
        <h3 className="card-heading">{heading}</h3>
      </div>
      {/* card discriptions */}
      <div className="cardDiscContainer">
        <p className="card-discription">{truncateText(pdric)}</p>
      </div>
      {/* Product Image */}
      <div className="card-product-img-container">
        <img src={productImg} alt={heading} className="card-product-img" />
        <div
          className="readmorarrow"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Normal arrow */}
          <TbArrowBigRight
            className={`cursor-icon ${isHovered ? "hidden" : ""}`}
          />

          {/* Filled arrow with opacity transition */}
          <TbArrowBigRightFilled
            className={`cursor-icon filled-arrow ${isHovered ? "visible" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
