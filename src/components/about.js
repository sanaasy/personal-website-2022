import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
// import me from "../images/me.jpg";
import me from "../images/me2.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
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
          <div className="image-wrapper">
            <div className="wrap">
              <img src={me} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
