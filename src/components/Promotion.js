import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Promotion = () => {
	const items = data.promotionPara.map((point) => <p>- {point}</p>);

	return (
		<div className="section">
			<div className="container">
				<div className="promotion-container">
					<Fade bottom cascade>
						<h1>{data.promotionHeading}</h1>
					</Fade>
					<div>{items}</div>
				</div>
			</div>
		</div>
	);
};

export default Promotion;
