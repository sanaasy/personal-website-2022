import React from "react";

const SpeakCard = ({ heading, paragraph, topic, imgUrl, url }) => {
  const linkButton = url ? (
    <a href={url ? url : "#"} target="_blank" rel="noopener noreferrer">
      check it out here
    </a>
  ) : null;

  return (
    <div className="speak-card">
      <div className="speak-content">
        <h1>{heading}</h1>
        <div className="img-container">
          <img src={imgUrl ? imgUrl : null} />
        </div>
        <div className="pill">{topic}</div>
        <p>{paragraph}</p>
      </div>
      {linkButton}
    </div>
  );
};

export default SpeakCard;
