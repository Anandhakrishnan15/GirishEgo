// import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import "./product.css"
// import Products from "./Products";
// // import AnimatedElements from "../../Animations/AnimatedElements";

// const ProductDetails = () => {
//   const { productId, subProductId } = useParams();
//   const productRefs = useRef({}); // Ref object to store references for each product

//   // Find the product based on productId
//   const product = Products.find((prod) => prod.id === productId);

//   // Find the sub-product if subProductId is provided
//   const subProduct = product?.subProducts?.find(
//     (sub) => sub.id === subProductId
//   );
//   // Scroll to the product box when productId is provided
//   // useEffect(() => {
//   //   if (subProductId && productRefs.current[subProductId]) {
//   //     productRefs.current[subProductId].scrollIntoView({
//   //       behavior: "smooth",
//   //       block: "start",
//   //     });
//   //   }
//   // }, [subProductId]);

//   return (
//     // <>
//     //   <h1>Product Pages</h1>
//     // </>
//     <div className="productContainer">
//       {/* <h1>Product Details</h1>
//       <div>
//         <h1>{product.name}</h1>
//       </div> */}
 
//       {product.subProducts.map((info) => (
//         <div className="productsHolder">
//           <div>
//             <div
//               className="Product-info-key"
//               key={info.id}
//               ref={(el) => (productRefs.current[info.id] = el)} // Assign refs dynamically
//               id={info.id}
//             >
//               {/* product heading and sub headings */}
//               <div className="productHeader">
//                 <div className="line"></div>
//                 <h1>{info.title}</h1>

//                 <div className="line"></div>
//                 <h3>{info.application}</h3>
//                 {/* Render models with commas */}
//                 <h4>({info.models.join(", ")})</h4>
//               </div>
//               {/* image and features div */}
//               <div className="imgAndFeaturesHolder">
//                 <img src={info.productImg} alt="" />
//                 <ul>
//                   {info.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//               {/* the description and other information holders */}
//               <div className="productDiscriptionHolder">
//                 <p>{info.description}</p> {/* Main discription */}
//                 <div className="workingDetailscontainer">
//                   {/* working deatails */}
//                   <h4>{info.workingH} :-</h4>
//                   {/* heading */}
//                   {/* downe here are the info */}
//                   <p>{info.workingDetails}</p>
//                   <ol>
//                     {info.tests.map((Test, iTest) => (
//                       <li key={iTest}>{Test}</li>
//                     ))}
//                   </ol>
//                 </div>
//                 <div className="testingContainer">
//                   <h4>{info.intended}</h4>
//                   <p>{info.uses.join(", ")}</p>
//                 </div>
//                 <div className="instalaationcontainer">
//                   <h4>{info.Installation}</h4>
//                   <p>{info.instructions}</p>
//                 </div>
//                 <div className="remarkContainer">
//                   <h4>{info.remark}</h4>
//                   <p>{info.recommendation}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       </div>
//   );
// };

// export default ProductDetails;
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

