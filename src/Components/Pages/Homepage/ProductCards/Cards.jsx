import React from "react";
import "./Card.css"; // Import CSS for styling
import { useNavigate } from "react-router";

const Cards = ({ logo, productImg, heading, options ,productId,}) => {
  
     const navigate = useNavigate();

     const handleSelect = (event) => {
       const selectedSubproduct = event.target.value;
       if (selectedSubproduct) {
         navigate(`/Products/${productId}/${selectedSubproduct}`); // Navigate to the subproduct page
       }
     };
  return (
    <div className="card">
      {/* Logo */}
      <div className="card-logo-container">
        <img src={logo} alt="Logo" className="card-logo" />
      </div>

      {/* Product Image */}
      <div className="card-product-img-container">
        <img src={productImg} alt={heading} className="card-product-img" />
      </div>

      {/* Product Heading */}
      <div className="card-heading-container">
        <h3 className="card-heading">{heading}</h3>
      </div>

      {/* Dropdown */}
      <div className="card-dropdown-container">
        <select className="card-dropdown" onChange={handleSelect}>
          <option value="">Select a subproduct</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Cards;
