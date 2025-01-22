
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import Products from "./Products";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa6";

const ProductDetails = () => {
  const { productId, subProductId } = useParams();
  const productRefs = useRef({}); // Ref object to store references for each product

  // Find the product based on productId
  const product = Products.find((prod) => prod.id === productId);

  // Handle case where productId is invalid
  if (!product) {
    return <div className="productContainer">Product not found</div>;
  }

  // Find the sub-product if subProductId is provided
  const filteredSubProducts = subProductId
    ? product.subProducts.filter((sub) => sub.id === subProductId)
    : product.subProducts;

  useEffect(() => {
  if (subProductId) {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling animation
    });
  }
}, [subProductId]);;

  return (
    <div className="productContainer">
      <div className="productHeader">
        <h1>{product.name}</h1>
      </div>
      {filteredSubProducts.map((info) => (
        <div className="productsHolder" key={info.id}>
          <div
            className="Product-info-key"
            ref={(el) => (productRefs.current[info.id] = el)} // Assign refs dynamically
            id={info.id}
          >
            {/* Product heading and sub headings */}
            <div className="productHeader">
              <div className="line"></div>
              <h1>{info.title}</h1>
              <div className="line"></div>
              <h3>{info.application}</h3>
              <h4>({info.models.join(", ")})</h4>
            </div>
            {/* Image and features */}
            <div className="imgAndFeaturesHolder">
              <img src={info.productImg} alt={info.title} />
              {/* features of the products */}
              <div className="fecturesbox">
                <h4>Features</h4>
                <ul>
                  {info.features.map((feature, i) => (
                    <li key={i}>
                      <AiOutlineArrowRight /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* features of products End */}
            </div>
            {/* Description and other details */}
            <div className="productDiscriptionHolder">
              {/* Product description */}
              <div className="decriptions">
                <span className="hand-icon">
                  <FaRegHandPointRight />
                </span>
                <p>{info.description}</p>
              </div>
              {/* woking details container */}
              <div className="working-testingDetailscontainer">
                <div className="workingHolder">
                  <h4>{info.workingH}:</h4>
                  <ul>
                    {info.workingDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <ol>
                    {info.tests.map((test, iTest) => (
                      <li key={iTest}>{test}</li>
                    ))}
                  </ol>
                </div>
                {/* instaltion containder */}
                <div className="instalaationcontainer">
                  <h4>{info.Installation}</h4>
                  <ul>
                    {info.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
                {/* testing container */}
                <div className="testingContainer">
                  <h4>{info.intended}</h4>
                  <ul>
                    <li>{info.uses.join(", ")}</li>
                  </ul>
                </div>
                {/* remark container */}
                <div className="remarkContainer">
                  <h4>{info.remark}</h4>
                  <ul>
                    <li>{info.recommendation}</li>
                  </ul>
                </div>
                {/* other Images container */}
                <div className="otherImagesContainer">
                  {/* <h4>{info.remark}</h4> */}
                  
                    {info.otherImages.map((otherImg, idx) => (
                        <img
                         key={idx}
                         src={otherImg} />
                    ))}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

