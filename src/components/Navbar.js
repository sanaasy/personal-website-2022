import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.png";

const Navbar = () => {
	let clickMe = (location) => {
    return () => scrollTo(location);
  };

	return (
		<div className="section">
			<div className="container">
				<div className="navbar-wrapper">
					<div role="button" onClick={() => scrollTo("#home")} tabIndex={0}>
						<img src={logo} alt="logo" className="name" />
					</div>
					<div className="links-wrapper">
					<button onClick={clickMe("#home")} onKeyDown={clickMe("#home")}>
              Home
            </button>
            <button onClick={clickMe("#work")} onKeyDown={clickMe("#work")}>
              Projects
            </button>
            <button onClick={clickMe("#skills")} onKeyDown={clickMe("#skills")}>
              Skills
            </button>
            <button onClick={clickMe("#about")} onKeyDown={clickMe("#about")}>
              About Me
            </button>
            <button
              onClick={clickMe("#featured")}
              onKeyDown={clickMe("#featured")}
            >
              Featured
            </button>
						<button onClick={clickMe("#contact")} onKeyDown={clickMe("#contact")}>Contact Me</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
