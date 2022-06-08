import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            {/* <h2>{data.contactSubHeading}</h2> */}
          </Fade>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Contact email"
            />
          </div>
          <div>
            <label for="subject">Subject</label>
            {/* <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style="height:200px"
            ></textarea> */}
          </div>
					<input type="submit" value="Submit" />
          {/* <a className="email-link" href={`mailto:${data.contactEmail}`}>
						{data.contactEmail}
					</a>
					<div className="social-icons">
						{data.social.map((socialLink, index) => (
							<a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer">
								<img src={socialLink.img} alt="icons"></img>
							</a>
						))}
					</div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
