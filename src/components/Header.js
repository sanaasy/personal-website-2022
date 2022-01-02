import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import email from "../images/email.png";

const Header = () => {
	return (
		<div className="section" id="home">
			<div className="container">
				<div className="header-wrapper">
					<Fade bottom>
						<h2>
							Hi, I'm {data.name}{" "}
							<span role="img" aria-label="Emoji">
								👋
							</span>
						</h2>
					</Fade>
					<Fade bottom cascade>
						<div className="heading-wrapper">
							<h1>{data.headerTagline[0]}</h1>
							{/* <h1> {data.headerTagline[1]}</h1> */}
							<h1> {data.headerTagline[2]}</h1>
						</div>
					</Fade>
					{/* <Fade bottom>
						<p>{data.headerParagraph}</p>
					</Fade> */}
					<Fade bottom>
						{/* <a
							href={`mailto:${data.contactEmail ? data.contactEmail : "sanaasyed.t@gmail.com"}`}
							className="primary-btn"
						>
							CONNECT WITH ME{"     "}
							<img
								src={email}
								alt="email"
								width="20"
								height="20"
								style={{ verticalAlign: "middle", filter: "invert(100%)" }}
							/>
						</a> */}
						<div className="social-icons">
							{data.social.map((socialLink, index) => (
								<a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer">
									<img src={socialLink.img} alt="icons"></img>
								</a>
							))}
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Header;
