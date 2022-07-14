import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import email from "../images/email.png";

import ReactTypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h2>
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Hi, I'm {data.name}.{" "}
          </h2>

          <div className="typed-text">
            <ReactTypingEffect
              text={["Software Developer @ Shopify", "CS and Business"]}
              speed={100}
              typingDelay={1000}
              eraseSpeed={100}
            />
          </div>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
            <a
              href="mailto:sanaasyed.t@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <img src={email} alt="email" />
            </a>
          </div>
          <a target="no_blank" href="/resume.pdf" className="resume">
            check out my <strong>resume</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
