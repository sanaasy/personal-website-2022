import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Categories = [
  "Programming Languages",
  "Tools and Frameworks",
  "Certifications",
];

const Skills = () => {
  const [filter, setFilter] = useState("Programming Languages");

  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <Fade bottom cascade>
            <h1>Skills</h1>
          </Fade>
          <div className="button-group">
            {Categories.map((categoryName) => {
              return (
                <button
                  type="button"
                  style={{
                    backgroundColor:
                      filter === categoryName ? "#c99c80" : "#F7F2ED",
                    color: filter === categoryName ? "#fff" : "#C99C80",
                  }}
                  className="btn active"
                  onClick={() => setFilter(categoryName)}
                >
                  {categoryName}
                </button>
              );
            })}
          </div>
          
          {filter === "Programming Languages" ? (
            <div className="skills-grid" >
              {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.img} alt="css"></img>
                  <p>{skill.para}</p>
                </div>
              ))}
            </div>
          ) : null}

          {filter === "Tools and Frameworks" ? (
            <div className="skills-grid">
              {data.tools.map((tool, index) => (
                <div className="skill" key={index}>
                  <img src={tool.img} alt="css"></img>
                  <p>{tool.para}</p>
                </div>
              ))}
            </div>
          ) : null}

          {filter === "Certifications" ? (
            <div className="certs-grid">
              {data.other.map((skill, index) => (
                <div className="cert" key={index}>
                  <img src={skill.img} alt="css" />
                  <p>{skill.para}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Skills;
