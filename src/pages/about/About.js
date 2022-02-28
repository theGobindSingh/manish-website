import "./About.css";
import React from "react";
import { left_heading, right_heading, cols } from "../../assets/texts/about";
import si from "../../assets/images/si.webp";
import si2 from "../../assets/images/googlelogo.png";
import si3 from "../../assets/images/reactlogo.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function About() {
  return (
    <div id="about" className="full-page">
      <div className="left-side">
        <h2>
          {left_heading.split("**").map((t, i) => {
            return (
              <span key={i}>
                {t}
                <br />
              </span>
            );
          })}
        </h2>
        <img src={si} alt="" />
        <div className="companies">
          <Carousel
            responsive={{
              default: {
                breakpoint: { max: 9999, min: 0 },
                items: 3,
              },
            }}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 0.5s ease-in-out"
            transitionDuration={500}
            arrows={false}
            pauseOnHover={false}
          >
            <img src={si} alt="" className="comapny-img" />
            <img src={si2} alt="" className="comapny-img" />
            <img src={si3} alt="" className="comapny-img" />
          </Carousel>
        </div>
      </div>
      <div className="right-side">
        <h3>{right_heading}</h3>
        <div className="right-cols">
          {cols.map((data, ind) => {
            return (
              <div className={"col-" + (ind + 1)} key={ind}>
                <h3>{data[0]}</h3>
                <p>{data[1]}</p>
                <a href="/#about">
                  <button>ALL SERVICES</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
