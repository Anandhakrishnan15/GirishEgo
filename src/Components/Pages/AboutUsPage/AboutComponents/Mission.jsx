import React from 'react'

const Mission = ({data}) => {
  return (
    <section className="about_us">
      <h2>{data.title}</h2>
      {data.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}

export default Mission
