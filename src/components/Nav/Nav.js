import "./Nav.css";
import React from "react";

export default function Nav() {
  function forScroll(elemID) {
    try {
      // document.querySelector("#" + elemID).scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
      const blue = document.querySelector("#" + elemID);
      let position = blue.getBoundingClientRect();
      window.scrollTo({
        top: position.top,
        left: position.left + window.scrollX - 60,
        behavior: "smooth",
      });
    } catch {}
  }
  return (
    <nav id="mainNav">
      <span
        onClick={() => {
          forScroll("home");
        }}
      >
        Home
      </span>
      <span
        onClick={() => {
          forScroll("about");
        }}
      >
        About
      </span>
      <span
        onClick={() => {
          forScroll("work");
        }}
      >
        Work
      </span>
      <span
        onClick={() => {
          forScroll("contact");
        }}
      >
        Contact us
      </span>
    </nav>
  );
}
