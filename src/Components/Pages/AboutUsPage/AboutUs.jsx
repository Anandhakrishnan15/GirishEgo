import React from 'react'
import WhoWeAre from "./AboutComponents/WhoWeAre";
import Infrastructure from "./AboutComponents/Infrastructure";
import Team from "./AboutComponents/Team";
import aboutData from "./AboutComponents/aboutData";
import Quality from './AboutComponents/Quality';
import Mission from './AboutComponents/Mission';
import Vision from "./AboutComponents/Vision";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div className="sectionWrapper">
        <WhoWeAre data={aboutData.whoWeAre[0]} />
      </div>
      <div className="sectionWrapper">
        <Infrastructure data={aboutData.infrastructure[0]} />
      </div>
      <div className="sectionWrapper">
        <Team data={aboutData.team[0]} />
      </div>
      <div className="sectionWrapper">
        <Quality data={aboutData.quality[0]} />
      </div>
      <div className="sectionWrapper">
        <Mission data={aboutData.mission[0]} />
      </div>
      <div className="sectionWrapper">
        <Vision data={aboutData.vision[0]} />
      </div>
    </div>
  );
};
  
export default AboutUs
