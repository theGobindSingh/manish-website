import "./Nav.css";
import React from "react";

export default function Nav() {
  function forScroll(elemID) {
    try {
      // document.querySelector("#" + elemID).scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
      const elem = document.querySelector("#" + elemID);
      let position = elem.getBoundingClientRect();
      if (window.innerWidth >= 900) {
        window.scrollTo({
          top: position.top,
          left: position.left + window.scrollX - 60,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: position.top + window.scrollY - 90,
          left: position.left,
          behavior: "smooth",
        });
      }
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
