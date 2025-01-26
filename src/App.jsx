import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Pages/Homepage/Home";
import AboutUs from "./Components/Pages/AboutUsPage/AboutUs";
import ContactUs from "./Components/Pages/ContactUsPage/ContactUs";
import Resources from "./Components/Pages/ResourcesPage/Resources";
import Products from "./Components/Pages/ProductPage/Products";
import ProductDetails from "./Components/Pages/ProductPage/ProductDetails";
import AnimatedElements from "./Components/Animations/AnimatedElements";
import PoductsId from "./Components/Pages/Homepage/PoductsId";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedElements />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/Resources" element={<Resources />} />
        {/* <Route path="/Products" element={<Products />} /> */}
        {/* Product-specific routes */}
        <Route path="/Products/:productId" element={<PoductsId />} />
        <Route
          path="/Products/:productId/:subProductId"
          element={<ProductDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
