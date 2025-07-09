import { BrowserRouter } from "react-router-dom";

import {
  About,
  Images,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-hero-pattern lg:bg-cover sm:bg-contain bg-center-center bg-no-repeat opacity-0.3">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-[#1e113a] relative z-0">
          <About />
          <Images />
          <StarsCanvas />
          <Experience />
          <Tech />
        </div>

        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0 bg-[#1e113a] ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// FF0000
