
import React from "react";
// import "./Team.css";

const Team = ({ data }) => {
  return (
    <section className="about_us">
      <h2>{data.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.mcontent }}></p>
      <ul className="team-subSection">
        {data.content.map((paragraph, index) => (
          <React.Fragment key={index}>
            <li dangerouslySetInnerHTML={{ __html: paragraph }}></li>
            <br />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Team;
