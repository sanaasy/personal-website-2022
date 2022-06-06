import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../images/logo.png";

const Navbar = () => {
  let clickMe = (location) => {
    return () => scrollTo(location);
  };

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10){
      setVisible(true)
    } 
    else {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper" style={{backgroundColor: visible ? "#edede9" : "#fff", transition: "all .8s ease",}}>
          <div
            role="button"
            onClick={clickMe("#home")}
            onKeyDown={clickMe("#home")}
            tabIndex={0}
          >
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
              onClick={clickMe("#speaking")}
              onKeyDown={clickMe("#speaking")}
            >
              Speaking Engagements
            </button>
            <button
              onClick={clickMe("#contact")}
              onKeyDown={clickMe("#contact")}
              style={{ marginRight: "15vw" }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
