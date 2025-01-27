import React from 'react'
import Cards from '../../ProductCards/Cards'
import Products from "../ProductPage/Products";
import { useParams } from 'react-router-dom';

const PoductsId = () => {
  const {productId}=useParams();
  console.log('product id', productId);
  const productCat= Products.find((prod)=> prod.id === productId)
  console.log('prodfuct cat',productCat.subProducts);
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
      {productCat.subProducts.map((sp) => (
        <div
          key={sp.id}
          style={{
            // display: "flex",
            // justifyContent: "center",
            padding: "20px",
            zIndex: "3",
          }}
        >
          <Cards
            productImg={sp.productImg}
            heading={sp.title}
            subProductsID={sp.id}
            productId={productId}
            pdric={sp.description}
            // // subProductId={Product.subProducts.map(
            // //   (subProduct) => subProduct.id
            // // )}
            // options={Product.subProducts}
          />
        </div>
      ))}
    </div>
  );
}

export default PoductsId
