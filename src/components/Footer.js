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

          <form action="mailto:sanaasyed.t@gmail.com" method="post" >
            <label for="name">Name</label>
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
            />
            <label for="email">Email</label>
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <label for="subject">Your message</label>
            <textarea
              name="text"
              class="feedback-input"
              placeholder="Comment"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
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
