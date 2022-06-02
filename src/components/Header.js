import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
// import email from "../images/email.png";

import blobs from "../images/home/blobs.png";

import b1 from "../images/home/b1.svg";
import b2 from "../images/home/b2.svg";
import b3 from "../images/home/b3.svg";
import b4 from "../images/home/b4.svg";
import b5 from "../images/home/b5.svg";
import b6 from "../images/home/b6.svg";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h2>
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Hi, my name is {data.name}{" "}
          </h2>
          <p>Coder @ Shopify. Writer. CS '22.</p>

          {/* <div className="background">
          </div> */}

          <div className="shape1">
            <img src={b1} alt="shape" />
          </div>
          <div className="shape2">
            <img src={b2} alt="shape" />
          </div>
          <div className="shape3">
            <img src={b3} alt="shape" />
          </div>
          <div className="shape4">
            <img src={b4} alt="shape" />
          </div>
          <div className="shape5">
            <img src={b5} alt="shape" />
          </div>
          <div className="shape6">
            <img src={b6} alt="shape" />
          </div>

          {/* <Fade bottom>
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
          </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
