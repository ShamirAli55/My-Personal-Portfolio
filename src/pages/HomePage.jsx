import ReactLenis from "lenis/react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Hero from "../sections/Hero";
import OverLay from "../components/OverLay";
import About from "../sections/About";

const HomePage = () => {
  return (
    <>
      <ReactLenis root={true}>
        <section id="home" className="w-full min-h-screen relative z-[10] ">
          <OverLay />
          <Navbar />
          <Hero />
          <About />
          <ThemeToggle />
        </section>
      </ReactLenis>
    </>
  );
};

export default HomePage;
