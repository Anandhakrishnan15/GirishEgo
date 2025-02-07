import React from "react";
// import "./Infrastructure.css";

const Infrastructure = ({ data }) => {
  return (
    <>
    
      <section className="about_us">
        <h2>{data.title}</h2>
        {data.subsections.map((subsection, index) => (
          <div key={index} className="subsection">
            <h3>{subsection.subtitle}</h3>
            {/* <p>{subsection.content}</p> */}
            <p dangerouslySetInnerHTML={{ __html: subsection.content }}></p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Infrastructure;
