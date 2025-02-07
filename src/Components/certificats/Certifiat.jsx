import React from 'react'
import './cetficat.css'
import img1 from "./certifat-images/certImg (1).png";
import img2 from "./certifat-images/certImg (2).png";
import img3 from "./certifat-images/certImgjpg (1).jpg";
import img4 from "./certifat-images/certImgjpg (2).jpg";
import img5 from "./certifat-images/certImgjpg (3).jpg";
 
    const certifiactIMgs =[ img1, img2, img3, img4, img5 ];

const Certifiat = () => {
  return (
    <div>
      <div className="cartificate-Container">
        <div className="line"></div>
        <h3 style={{ fontSize: "50px", textTransform: "uppercase" }}>
          Certification
        </h3>
        <div className="line"></div>

        <div className="certoficat_holder">
          <div className="certfict_imgsvontainer">
            <div className="Certificat-img">
              {certifiactIMgs.map((i) => (
                <div key={i}>
                  <img src={i} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifiat
