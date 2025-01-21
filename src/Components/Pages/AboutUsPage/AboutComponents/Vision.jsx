import React from 'react'

const Vision = ({ data }) => {
  return (
    <section className="about_us">
      <h2>{data.title}</h2>
      <ul>
        {data.content.map((paragraph, index) => (
          <React.Fragment key={index}>
            <li dangerouslySetInnerHTML={{ __html: paragraph }}></li>
            <br />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

export default Vision
