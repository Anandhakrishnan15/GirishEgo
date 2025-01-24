import React from "react";
// import Logo from '../../../assets/Images/logo1.png'
import Logo from "../../../assets/Images/GEC Logo png.png";

import "./Footer.css";

const Footer = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About Us", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      id: 1,
      label: "Phone",
      values: [
        { number: "+91 9820157929", link: "tel:+919820157929" },
        { number: "+91 2222068032", link: "tel:+912222068032" },
        { number: "+91 22083857", link: "tel:+9122083857" },
      ],
    },
    {
      id: 2,
      label: "WhatsApp",
      value: "+91 123 456 7890",
      link: "https://wa.me/911234567890",
    },
    {
      id: 3,
      label: "Email",
      value: "info@example.com",
      link: "mailto:info@example.com",
    },
  ];

  const address = [
    "M/s. Girish Electrical Industries.",
    "31, Tavawala Building, 147 Lohar Chawl, Mumbai - 400 002. Maharashtra, India.",
  ];

  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {/* Tagline */}
      <p className="footer-tagline">We are trusted for more than 45 years +</p>

      {/* Navigation Links */}
      <nav className="footer-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Address */}
      <div className="footer-address">
        {address.map((line, index) => (
          <div key={index}>
            <p>{line}</p>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="footer-contact">
        {contactInfo.map((info) => (
          <div key={info.id}>
            <div className="contact-footerholder">
              {info.label}:
              {info.values ? (
                // If multiple values exist
                info.values.map((phone, idx) => (
                  <div key={idx}>
                    <p>
                      <a href={phone.link} className="phone-link">
                        {phone.number}
                      </a>
                      {","}
                    </p>
                  </div>
                ))
              ) : (
                // If a single value exists
                <p>
                  <a
                    href={info.link}
                    className={`${info.label.toLowerCase()}-link`}
                  >
                    {info.value}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
