import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Skills = () => {
	return (
		<div className="section" id="skills">
			<div className="container">
				<div className="skills-container">
					<Fade bottom cascade>
						<h1>Skills</h1>
					</Fade>
					<h3>Programming Languages</h3>
					<div className="skills-grid">
						{data.skills.map((skill, index) => (
							<div className="skill" key={index}>
								<img src={skill.img} alt="css"></img>
								<p>{skill.para}</p>
								{/* <div className="gray">
									<div style={{ width: skill.percent, backgroundColor: skill.colour }}>{skill.percent}</div>
								</div> */}
							</div>
						))}
					</div>
					<h3>Tools and Frameworks</h3>
					<div className="skills-grid">
						{data.tools.map((tool, index) => (
							<div className="skill" key={index}>
								<img src={tool.img} alt="css"></img>
								<p>{tool.para}</p>
							</div>
						))}
					</div>
					{/* <h3>Other</h3>
					<div className="skills-grid">
						{data.other.map((skill, index) => (
							<div className="skill" key={index}>
								<img src={skill.img} alt="css"></img>
								<p>{skill.para}</p>
							</div>
						))}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
