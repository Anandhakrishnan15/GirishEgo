
import React, { useEffect, useRef } from "react";
import {motion} from "framer-motion"
import { useParams } from "react-router-dom";
import "./product.css";
import Products from "../../Data/Products";
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
      <motion.div
        className="productHeader"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ textTransform: "capitalize" }}>{product.name}</h1>
      </motion.div>
      {filteredSubProducts.map((info) => (
        <div className="productsHolder" key={info.id}>
          <div
            className="Product-info-key"
            ref={(el) => (productRefs.current[info.id] = el)} // Assign refs dynamically
            id={info.id}
          >
            {/* Product heading and sub headings */}
            <motion.div
              className="productHeader"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="line"></div>
              <h1>{info.title.replace(/=/g, "").toUpperCase()}</h1>
              <div className="line"></div>
              <h3>{info.application}</h3>
              <h4>({info.models.join(", ")})</h4>
            </motion.div>
            {/* Image and features */}
            <div className="imgAndFeaturesHolder">
              <motion.img
                src={info.productImg}
                alt={info.title}
                initial={{ opacity: 0, scale: 0.7 }} // Starts small & hidden
                whileInView={{ opacity: 1, scale: 1 }} // Zooms in when in view
                exit={{ opacity: 0, scale: 0.5 }} // Zooms out & fades when out of view
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }} // Repeats animation when scrolling back
              />
              {/* features of the products */}
              <div className="fecturesbox">
                <h4>{info.featuresH}</h4>
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
            <motion.div
              className="productDiscriptionHolder"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Product description */}
              {info.description && (
                <motion.div
                  className="decriptions"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="hand-icon">
                    <FaRegHandPointRight />
                  </span>
                  <p>{info.description}</p>
                </motion.div>
              )}

              {/* woking details container */}

              <motion.div
                className="working-testingDetailscontainer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {info.workingH && (
                  <motion.div
                    className="workingHolder"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }} // Runs animation every time it comes into view
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 }, // Each child appears with a 0.3s delay
                      },
                    }}
                  >
                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                    >
                      {info.workingH}
                    </motion.h4>

                    <motion.ul
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      {info.workingDetails.map((detail, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.4 },
                            },
                          }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.ol
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      {info.tests.map((test, iTest) => (
                        <motion.li
                          key={iTest}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.4 },
                            },
                          }}
                        >
                          {test}
                        </motion.li>
                      ))}
                    </motion.ol>
                  </motion.div>
                )}
                {/* instaltion containder */}
                {info.Installation && (
                  <motion.div
                    className="instalaationcontainer"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }} // Animation triggers every time it comes into view
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 }, // Each child appears with a 0.3s delay
                      },
                    }}
                  >
                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                    >
                      {info.Installation}
                    </motion.h4>

                    <motion.ul
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      {info.instructions.map((instruction, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.4 },
                            },
                          }}
                        >
                          {instruction}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}

                {info.construtionH && (
                  <motion.div
                    className="constrationContainer"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 }, // Delay between children appearing
                      },
                    }}
                  >
                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                    >
                      {info.construtionH}
                    </motion.h4>

                    <motion.ul
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      {info.constrution.map((c, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.4 },
                            },
                          }}
                        >
                          {c}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}

                {/* testing container */}
                {info.intended && (
                  <motion.div
                    className="testingContainer"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 }, // Delays children elements
                      },
                    }}
                  >
                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                    >
                      {info.intended}
                    </motion.h4>

                    <motion.ul
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      {info.uses.map((use, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.4 },
                            },
                          }}
                        >
                          {use}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}

                {/* remark container */}
                {info.remark && (
                  <motion.div
                    className="remarkContainer"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 }, // Delay between child animations
                      },
                    }}
                  >
                    {/* Heading animation */}
                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      {info.remark}
                    </motion.h4>

                    {/* List animation */}
                    <motion.ul
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.4 },
                          },
                        }}
                      >
                        {info.recommendation}
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                style={{
                  margin: "20px",
                  color: "rgb(14, 51, 108)",
                  display: "flex",
                  justifyContent: "space-around",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1>More info</h1>
              </motion.div>
              {/* other Images container */}
              <motion.div
                className="otherImagesContainer"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 }, // Delay each image animation
                  },
                }}
              >
                {info.otherImages.map((otherImg, idx) => (
                  <motion.img
                    key={idx}
                    src={otherImg}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{ scale: 1.05 }} // Hover effect
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

