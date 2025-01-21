import React from "react";
// import "./WhoWeAre.css";

const WhoWeAre = ({ data }) => {
  return (
    <section className="about_us">
      <h2>{data.title}</h2>
      {data.content.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          <br />
        </React.Fragment>
      ))}
      <a href="/public/GEC-CAT-21-01-23.pdf" download>
        <button>Download Catalogue</button>
      </a>
    </section>
  );
};

export default WhoWeAre;
