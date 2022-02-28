import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const [ss, sss] = useState(900);
  useEffect(() => {
    try {
      // console.log("screen width => " + window.innerWidth);
      sss(window.innerWidth);
      window.addEventListener("resize", () => {
        sss(window.innerWidth);
      });
    } catch {}

    const target = document.querySelector("*");
    function wheelFun(event) {
      const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
      const toRight =
        event.deltaY > 0 &&
        target.scrollLeft < target.scrollWidth - target.clientWidth;
      if (toLeft || toRight) {
        event.preventDefault();
        target.scrollLeft += event.deltaY;
      }
    }
    if (ss >= 900) {
      target.addEventListener("wheel", wheelFun, { passive: false });
    } else {
      try {
        target.removeEventListener("wheel", wheelFun);
      } catch {}
    }
  }, [ss]);
  return (
    <div id="App" className="App">
      <Nav />
      <div className="blank-element" style={{ width: "10vw" }} />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
