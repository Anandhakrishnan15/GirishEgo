import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import Products from "./Products";

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

  // Scroll to the sub-product box when subProductId is provided
  useEffect(() => {
    if (subProductId && productRefs.current[subProductId]) {
      productRefs.current[subProductId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [subProductId]);

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
              <ul>
                {info.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            {/* Description and other details */}
            <div className="productDiscriptionHolder">
              <p>{info.description}</p>
              <div className="workingDetailscontainer">
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
              <div className="testingContainer">
                <h4>{info.intended}</h4>
                <p>{info.uses.join(", ")}</p>
              </div>
              <div className="instalaationcontainer">
                <h4>{info.Installation}</h4>
                <ul>
                  {info.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              <div className="remarkContainer">
                <h4>{info.remark}</h4>
                <p>{info.recommendation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
