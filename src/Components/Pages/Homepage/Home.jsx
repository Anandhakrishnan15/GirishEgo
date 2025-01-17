import React from 'react'
import  Carousel from '../../Hero/Carousel'
import Cards from './ProductCards/Cards';
import Products from '../ProductPage/Products';

const Home = () => {
  return (
    <div>
      <h1>homepage</h1>
      {/* <Carousel /> */}
      {/* <div
        className="ProductCArdContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {Products.map((Product) => (
          <div
            key={Product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Cards
              logo="asdasdasda"
              productImg="asdasdasd"
              heading={Product.name}
              productId={Product.id}
              // subProductId={Product.subProducts.map(
              //   (subProduct) => subProduct.id
              // )}
              options={Product.subProducts}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home
