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
      <a
        onClick={() => {
          forScroll("home");
        }}
      >
        Home
      </a>
      <a
        onClick={() => {
          forScroll("about");
        }}
      >
        About
      </a>
      <a
        onClick={() => {
          forScroll("work");
        }}
      >
        Work
      </a>
      <a
        onClick={() => {
          forScroll("contact");
        }}
      >
        Contact us
      </a>
    </nav>
  );
}
