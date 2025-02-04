import React from "react";
import "./Marquee.css"; // Import CSS for styling

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="update-label">Updates</div> {/* Fixed label on left */}
      <div className="marquee-container">
        <div className="marquee">
          Extensive range of Panel / Enclosure / cabinet heaters and
          Thermostats.
        </div>
      </div>
    </div>
  );
};

export default Marquee;
