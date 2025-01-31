import React, { useState } from "react";
import "./contact.css";
import CRS from "../../assets/Images/contact-Us-page/contact-us page-CS-image.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(null); // Track loading state per number
  

  const contactDetails = [
    {
      title: "Address",
      content: [
        "M/s. Girish Electrical Industries. 31, Tavawala Building, 147 Lohar Chawl, Mumbai - 400 002. Maharashtra, India.",
      ],
      email:[]
    },
    {
      title: "Contact Info",
      content: ["📞+91 22 22068032", "📞+91 22 22083857"],
      email: ["📧 sales@girishego.com", "📧 info@girishego.com"],
    },
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  // Handle call with dynamic number
  const handleCall = (phoneNumber) => {
    // Check if the user is on a mobile device
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      toast.warning(
        "You are using a desktop/laptop. Please use a mobile phone to make a call.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          // transition: Slide,
        }
      );
         setShowPopup(false)
      return; // Stop function execution if on a desktop
    }
    if (!phoneNumber) return;
    setLoading(true); // Show loader for this number
    window.location.href = `tel:${phoneNumber}`;

    // Simulate call duration (7 seconds), then reset
    setTimeout(() => {
      setShowPopup(false);
      setLoading(false);
    }, 7000);
  };

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
                  onClick={() => handleCall(detail.content)}
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Thank you for reaching out!</h3>
            <p>
              Sorry for the inconvenience. Kindly call us for better experience.
            </p>
            <div className="popup-buttons">
              <button
                className="call-btn"
                onClick={() => handleCall("+912222068032")}
              >
                {loading ? "Calling..." : "Call Us"}
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
