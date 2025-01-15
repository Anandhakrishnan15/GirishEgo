import React, { useEffect, useState } from 'react'
import './Navbar.css';
import {Link, NavLink} from 'react-router';
import Products from '../Pages/ProductPage/Products';

const Navbar = () => {
  // const [scrollData, setscrollData] = useState({ y: 0, lastY: 1 });
  // get the postion of the Scroll bar y axis
  const [navBarVisable, setNavbarvisible] = useState(true);
  // if it ture then show navbr else hide helps tom change the css property
  const [dropdown, setDropdown] = useState(false);
  // if the screen is in resopnive for the hammenu
  const [hamenuon, setHammenuon] = useState(false);

  // const [resOn,setResOn]= useState(false)

  const [visibleSubProducts, setVisibleSubProducts] = useState({}); // Track visibility for each product
  // useEffect(() => {
  //   const handelScrolldata = () => {
  //     //function which will update the scroll movementn and give it to the setscrollData state
  //     setscrollData((prevState) => {
  //       return {
  //         y: window.scrollY,
  //         lastY: prevState.y,
  //       };
  //     });
  //   };
  //   window.addEventListener("scroll", handelScrolldata);
  //   return () => {
  //     // cleanup function
  //     window.removeEventListener("scroll", handelScrolldata);
  //   };
  // }, []);

  //   useEffect(() => {
  //     // over her we will use the conditonal operations and change the navbarvisibe
  //     // console.log(scrollData);
  //     if (scrollData.y > 20) {
  //       setNavbarvisible(false);
  //     } else {
  //       setNavbarvisible(true);
  //     }
  //     if (scrollData.y < scrollData.lastY) {
  //       // here if the last postion of the scroll is larger then hide
  //       setNavbarvisible(true);
  //       //if the user scroll back to then the the scroll bar will pop u again.
  //     } else {
  //       setNavbarvisible(false);
  //       // and hide if the user scrolls down back again
  //     }
  // // this will make the dropdown disaper if the user scroll while the drop down was active
  //     setDropdown(false);
  //      setHammenuon(false)

  //     // update evertime the scrollData changes
  //   }, [scrollData]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHammenuon(false);
      }   
    };

    window.addEventListener("resize", handleResize);

    // Initial check in case the component is mounted after a resize
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubProductVisibility = (productId) => {
    setVisibleSubProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle visibility for the specific product
    }));
  };


  const handleLinkClick = () => {
    setDropdown(false);
    setHammenuon(false);
    setVisibleSubProducts({}); // Close all sub-products on link click
  };

  return (
    <nav
      className={`navbar ${navBarVisable ? "show" : ""}`}
      dir="ltr"
      // style={{ margin: "0px" }}
    >
      {/* here if the navBarViaibe is true then it will activate the show class from the css file else " " */}
      <div className="logo">Girish-heats</div>
      <div
        className="ham-menu"
        onClick={() => {
          setHammenuon(!hamenuon);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="icons">
        <ul className={hamenuon ? "open-hamListcontainer" : "navlistcontainer"}>
          {hamenuon ? (
            <div>
              <div>
                <h3>Logo</h3>
              </div>
              <div
                className="closeButton"
                onClick={() => {
                  setHammenuon(!hamenuon);
                }}
              >
                <span>&times;</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <NavLink to="/" onClick={handleLinkClick}>
            <li>Home</li>
          </NavLink>
          <NavLink to="About-us" onClick={handleLinkClick}>
            <li>About Us</li>
          </NavLink>
          {/* the dropdown of the products starts*/}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span
              className="product-dropdown-container"
              onClick={() => setDropdown(!dropdown)}
            >
              Products{" "}
              <span
                className={`productDropDownArrow ${
                  dropdown ? "arrowrotate" : ""
                }`}
              ></span>
            </span>
            {dropdown && (
              <ul
                className={`dropdown-menu ${dropdown ? "active" : ""}`}
              >
                {Products.map((product) => (
                  <li key={product.id} className="dropdown-item">
                    {!hamenuon ? (
                      <NavLink
                        to={`/Products/${product.id}`}
                        onClick={handleLinkClick}
                        style={{ cursor: "pointer" }}
                      >
                        <h3>{product.name}</h3>
                      </NavLink>
                    ) : (
                      <h3
                        onClick={() => toggleSubProductVisibility(product.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {product.name}
                      </h3>
                    )}

                    <ul
                      className={`sub-dropdown-menu ${
                        visibleSubProducts[product.id] ? "visible" : ""
                      }`}
                    >
                      {product.subProducts.map((subProduct) => (
                        <li key={subProduct.id}>
                          <NavLink
                            onClick={handleLinkClick}
                            to={`/Products/${product.id}/${subProduct.id}`}
                          >
                            {subProduct.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* dropdowm Ends */}
          <NavLink to="/Contact-us" onClick={handleLinkClick}>
            <li>Contact us</li>
          </NavLink>
          <NavLink to="/Resources" onClick={handleLinkClick}>
            <li>Resources</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
