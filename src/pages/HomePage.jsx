import ReactLenis from "lenis/react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Hero from "../sections/Hero";
import OverLay from "../components/OverLay";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <>
      <ReactLenis root={true}>
        <section id="home" className="w-full min-h-screen relative z-[10] ">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ThemeToggle />
        </section>
      </ReactLenis>
    </>
  );
};

export default HomePage;
