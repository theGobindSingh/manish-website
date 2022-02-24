import "./Contact.css";
import React from "react";
import { email, phone, address, socials } from "../../assets/texts/contact";
import img from "../../assets/images/om.png";

export default function Contact() {
  return (
    <div id="contact" className="full-page">
      <div className="text-container">
        <span>GET IN TOUCH WITH US @</span>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        <div className="rule"></div>
        <div className="address-and-socials">
          <div className="address">
            <span>WE'RE HERE</span>
            <h2>
              {address.map((data, ind) => {
                return (
                  <span key={ind}>
                    {data}
                    <br />
                  </span>
                );
              })}
            </h2>
          </div>
          <div className="socials">
            <span>CONNECT SOCIALLY @</span>
            {socials.map((social, ind) => {
              return (
                <a href={social[1]} key={ind}>
                  {social[0]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
