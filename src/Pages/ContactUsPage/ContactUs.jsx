import React, { useState } from "react";
import "./contact.css";
import CRS from "../../assets/Images/contact-Us-page/contact-us page-CS-image.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../Components/Form/Form";
import PopupModal from "../../Components/Form/popup/PopupModal";
import { useCall } from "../../global/CallContext";
const ContactUs = () => {
  // const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(null); // Track loading state per number
  const { handleCall } = useCall();
  const formFields = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Your Email" },
    {
      type: "textarea",
      name: "message",
      placeholder: "Your Message",
      rows: 5,
    },
  ];

  const contactDetails = [
    {
      title: "Address",
      content: [
        "M/s. Girish Electrical Industries. 31, Tavawala Building, 147 Lohar Chawl, Mumbai - 400 002. Maharashtra, India.",
      ],
      email: [],
    },
    {
      title: "Contact Info",
      content: ["+91 22 22068032", "+91 22 22083857"],
      // content: ["📞+91 22 22068032", "📞+91 22 22083857"],
      email: ["📧 sales@girishego.com", "📧 info@girishego.com"],
    },
  ];

  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      {/* Office Section */}
      <div className="office-section">
        <h2>Our Office</h2>
        <div className="office-details">
          {contactDetails.map((detail, index) => (
            <div className="office-box" key={index}>
              <h3>{detail.title}</h3>
              {detail.content.map((line, i) => (
                <a
                  onClick={() => handleCall(detail.content[i])}
                  key={i}
                  className="hover-effect"
                >
                  {line}
                </a>
              ))}
              {detail.email.map((email, ei) => (
                <a href={`mailto:${email}`} key={ei} className="hover-effect">
                  {email}
                </a>
              ))}
              {/* Call Button */}
              {detail.phone && (
                <button
                  className="call-button"
                  onClick={() => handleCall(detail.phone)}
                  disabled={loading === detail.phone}
                >
                  {loading === detail.phone
                    ? "Calling..."
                    : `Call ${detail.phone}`}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2WpedCPO5zsRMPdLa44XPRY&amp;key=AIzaSyDfawVF7z0zb57KuvbSdvIIBxYEioWjw48"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <div className="form-image">
          <img src={CRS} alt="Customer Service" />
        </div>
        <Form
          formheading="Send Us A Message"
          formbutton="Send"
          formFields={formFields}
          popupMessage="Sorry for the inconvenience. Kindly call us for a better experience."
          onSubmit={(data) => data}
        />
      </div>
    </div>
  );
};

export default ContactUs;
