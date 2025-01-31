import React, { useState } from "react";
import "./form.css";
import PopupModal from "./popup/PopupModal"; // Import the pop-up component
import { useCall } from "../../global/CallContext";

const Form = ({
  formFields,
  popupMessage,
  onSubmit,
  formheading,
  formbutton,
}) => {
  const [formData, setFormData] = useState({});
  //   const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle call with dynamic number
  //   const handleCall =(phoneNumber) => {
  //     // Check if the user is on a mobile device
  //     const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  //     if (!isMobile) {

  //       toast.warning(
  //         "You are using a desktop/laptop. Please use a mobile phone to make a call.",
  //         {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: false,
  //           progress: undefined,
  //           theme: "colored",
  //           // transition: Slide,
  //         }
  //       );
  //          setShowPopup(false)
  //       return; // Stop function execution if on a desktop
  //     }
  //     if (!phoneNumber) return;

  //      // Show loader for this number
  //     window.location.href = `tel:${phoneNumber}`;

  //     // Simulate call duration (7 seconds), then reset
  //     setTimeout(() => {
  //       setShowPopup(false)
  //     }, 7000);
  //   };
  const { handleCall, setShowPopup, showPopup } = useCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowPopup(true); // Show pop-up after form submission
  };

  return (
    <div className="form-holder">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>{formheading}</h2>

        {formFields.map((field, index) => (
          <div key={index} className="form-group">
            {/* Render label only if 'label' exists */}
            {field.label && (
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
            )}

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows || 5} // Default to 5 rows if not provided
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <button type="submit">{formbutton}</button>
      </form>

      {/* Pop-up Modal */}
      <PopupModal
        showPopup={showPopup}
        onClose={() => setShowPopup(false)}
        onCall={() => handleCall("+912222068032")}
        message={popupMessage}
      />
    </div>
  );
};

export default Form;
