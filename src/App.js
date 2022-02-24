import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div id="App" className="App">
      <Nav />
      <div className="blank-element" style={{ width: "13vw" }} />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
