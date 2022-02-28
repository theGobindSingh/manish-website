import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const target = document.querySelector("*");
    target.addEventListener(
      "wheel",
      (event) => {
        const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
        const toRight =
          event.deltaY > 0 &&
          target.scrollLeft < target.scrollWidth - target.clientWidth;
        if (toLeft || toRight) {
          event.preventDefault();
          target.scrollLeft += event.deltaY;
        }
      },
      { passive: false }
    );
  });
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
