import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

import me from "../images/me.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <Fade bottom cascade>
            <h1>About Me</h1>
          </Fade>
          <div className="image-wrapper">
            <img src={me} alt="about" />
          </div>
          <div className="content">
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
