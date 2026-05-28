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
        <div
  className="
    bg-hero-mobile
    md:bg-hero-tablet
    lg:bg-hero-desktop
    bg-cover
    bg-center
    bg-no-repeat
    md:min-h-screen
  "
>
          <Navbar />
          <Hero />
        </div>
        <div className="bg-[#1e113a] relative z-0">
          <About />
           <Works />
          <StarsCanvas />
          <Experience />
          <Tech />
        </div>

       
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
