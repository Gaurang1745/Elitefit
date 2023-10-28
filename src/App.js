import "./App.css";
import NavbarWithHeader from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Showcase from "./Components/Showcase";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import { useRef } from "react";
function App() {
  const aboutRef = useRef(null);
  return (
    <div className="App">
      <div className="feedback">FEEDBACK</div>
      <NavbarWithHeader aboutRef={aboutRef} />
      <Showcase />
      <div ref={aboutRef}>
        <About />
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
