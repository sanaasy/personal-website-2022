import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
// import email from "../images/email.png";
import s1 from "../images/home/1.svg";
import s2 from "../images/home/2.svg";
import s3 from "../images/home/3.svg";
import s4 from "../images/home/4.svg";
import s5 from "../images/home/5.svg";

import rand from "../images/home/rand.svg";
import blob from "../images/home/blob.svg";
import blob2 from "../images/home/blob2.svg";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          {/* <Fade bottom> */}
            <h2>
              <span role="img" aria-label="wave">
                👋
              </span>{" "}
              Hi, my name is {data.name}{" "}
            </h2>
            <p>Coder @ Shopify. Writer. CS '22.</p>
          {/* </Fade> */}

          <div className="shape1">
            <img src={rand} alt="shape" />
          </div>
          {/* <div className="shape1">
            <img src={s1} alt="shape" />
          </div> */}
          <div className="shape2">
            <img src={blob} alt="shape" />
          </div>
          <div className="shape3">
            <img src={blob2} alt="shape" />
          </div>{/* 
          <div className="shape4">
            <img src={s4} alt="shape" />
          </div>
          <div className="shape5">
            <img src={s5} alt="shape" />
          </div> */}

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
