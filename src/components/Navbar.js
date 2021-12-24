import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
	return (
		<div className="section">
			<div className="container">
				<div className="navbar-wrapper">
					<div role="button" onClick={() => scrollTo("#home")} tabIndex={0}>
						<img src={logo} alt="logo" className="name" />
					</div>
					<div className="links-wrapper">
						<button onClick={() => scrollTo("#work")}>Projects</button>
						<button onClick={() => scrollTo("#about")}>About</button>
						<button onClick={() => scrollTo("#skills")}>Skills</button>
						<button onClick={() => scrollTo("#contact")}>Contact</button>
						<a target="no_blank" href="/resume.pdf">
							Resume
						</a>
					</div>
					{/* <Hamburger
						direction="right"
						rounded
						onToggle={(toggled) => {
							if (toggled) {
							} else {
								// close a menu
							}
						}}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
