import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <>
      <section className="w-full min-h-screen relative z-[10] ">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </section>
    </>
  );
};

export default HomePage;
