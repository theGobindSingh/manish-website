import "./Home.css";
import React from "react";
import sampleImg from "../../assets/images/om.png";

export default function Home() {
  return (
    <div id="home" className="full-page">
      <div className="text-area">
        <h1>
          MRITYUN <span>J</span> DESIGNS
        </h1>
        <a href="/#contact">
          <button>GET IN TOUCH</button>
        </a>
      </div>
      <div className="image-area">
        <div className="img-row _1">
          <div className="img-container">
            <img src={sampleImg} alt="" />
          </div>
          <div className="img-container">
            <img src={sampleImg} alt="" />
          </div>
        </div>
        <div className="img-row _2">
          <div className="img-container">
            <img src={sampleImg} alt="" />
          </div>
        </div>
        <div className="img-row _3">
          <div className="img-container">
            <img src={sampleImg} alt="" />
          </div>
          <div className="img-container">
            <img src={sampleImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
