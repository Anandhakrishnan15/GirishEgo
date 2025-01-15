import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./product.css"
import Products from "./Products";

const ProductDetails = () => {
  const { productId, subProductId } = useParams();
  const productRefs = useRef({}); // Ref object to store references for each product

  // Find the product based on productId
  const product = Products.find((prod) => prod.id === productId);

  // Find the sub-product if subProductId is provided
  const subProduct = product?.subProducts?.find(
    (sub) => sub.id === subProductId
  );
  // Scroll to the product box when productId is provided
  useEffect(() => {
    if (subProductId && productRefs.current[subProductId]) {
      productRefs.current[subProductId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [subProductId]);

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <h1>{product.name}</h1>
      </div>
      {product.subProducts.map((info) => (
        <>
          <div
            className="Product-info-key"
            key={info.id}
            ref={(el) => (productRefs.current[info.id] = el)} // Assign refs dynamically
            id={info.id}
          >
            <h1>{info.name}</h1>
            <p>{info.productApplication}</p>
            <p>{info.productInfo}</p>
          </div>
        </>
      ))}
      ;
    </div>
  );
};

export default ProductDetails;
