import React from 'react'
import Carousel from "../../Components/Hero/Carousel";
// import Cards from '../../Components/Hero';
import Products from '../../Data/Products';
import Cards from '../../Components/ProductCards/Cards';
 import cardImg1 from "/hompage-cardimgs/2.png"
 import cardImg2 from "/hompage-cardimgs/1.png";
 import cardImg3 from "/hompage-cardimgs/3.png";
import Marquee from '../../Marquee/Marquee';


const Home = () => {
  const cardsimgs = [cardImg1, cardImg2, cardImg3];
  return (
    <div>
      {/* <h1>homepage</h1> */}
      <Carousel />
      <Marquee/>
 
      <div
        className="ProductCArdContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          position: "relative",
          zIndex: "3",
        }}
      >
        {Products.map((Product,index) => (
          <div
            key={Product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Cards
              productImg={cardsimgs[index]}
              heading={Product.name}
              productId={Product.id}
              // subProductId={Product.subProducts.map(
              //   (subProduct) => subProduct.id
              // )}
              options={Product.subProducts}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home
