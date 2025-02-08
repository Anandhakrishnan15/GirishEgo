import React from 'react'
import { motion } from "framer-motion";
import Cards from '../../Components/ProductCards/Cards'
import Products from "../../Data/Products";
import { useParams } from 'react-router-dom';

const PoductsId = () => {
  const {productId}=useParams();
  // console.log('product id', productId);
  const productCat= Products.find((prod)=> prod.id === productId)
  // console.log('prodfuct cat',productCat.subProducts);
  if(!productCat){
    return(
      <h1>no product found</h1>
    )
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/* Product heading and sub headings */}
      <div className="productHeader">
        <div className="line"></div>
        <h1 style={{ fontSize: "50px", textTransform: "uppercase" }}>
          {productCat.name}
        </h1>
        <div className="line"></div>
      </div>
      {productCat.subProducts.map((sp) => (
        <motion.div
          key={sp.id}
          style={{
            // display: "flex",
            // justifyContent: "center",
            padding: "20px",
            zIndex: "3",
          }}
          initial={{ opacity: 0, y: 50 }} // Start lower & invisible
          whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
          exit={{ opacity: 0, y: 50 }} // Fade out & move down when out of view
          transition={{ duration: 1, ease: "easeOut" }} // Delay each item
          viewport={{ once: false }} // Allows animation when scrolling up/down
        >
          <Cards
            productImg={sp.productImg}
            heading={
              sp.title
                .toLowerCase() // Convert the whole title to lowercase
                .replace(/=(\w)/g, (_, char) => char.toUpperCase()) // Remove hyphens & capitalize next letter
                .split(" ") // Split title into words
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
                .join(" ") // Join words back into a string
            }
            subProductsID={sp.id}
            productId={productId}
            pdric={sp.description}
            // // subProductId={Product.subProducts.map(
            // //   (subProduct) => subProduct.id
            // // )}
            // options={Product.subProducts}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default PoductsId
