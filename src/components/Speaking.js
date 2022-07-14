import React from "react";
import Fade from "react-reveal/Fade";
import SpeakCard from "./atoms/SpeakCard";

import data from "../yourdata";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const Speaking = () => {
  return (
    <div className="section" id="featured">
      <div className="container">
        <div className="speaking-section">
          <Fade bottom cascade>
            <h1>Featured</h1>
          </Fade>
          <div className="carousel">
            <Swiper
              grabCursor={true}
              slidesPerView={3}
              spaceBetween={30}
              navigation
              pagination
              autoplay={{
                delay: 3000
              }}
            >
              {data.speaking.map((card, index) => (
                <SwiperSlide>
                  <SpeakCard
                    key={index}
                    heading={card.title}
                    paragraph={card.description}
                    topic={card.type}
                    imgUrl={card.imageSrc}
                    url={card.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaking;
