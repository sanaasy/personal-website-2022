import React from "react";
import data from "../yourdata";

const Skills = () => {
	return (
		<div className="section" id="skills">
			<div className="container">
				<div className="skills-container">
					<h1>Skills</h1>
					<div className="skills-grid">
						{data.skills.map((skill, index) => (
							<div className="skill" key={index}>
								<img src={skill.img} alt="css"></img>
								<p>{skill.para}</p>
								<div className="gray">
									<div style={{ width: skill.percent, backgroundColor: skill.colour }}>{skill.percent}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
