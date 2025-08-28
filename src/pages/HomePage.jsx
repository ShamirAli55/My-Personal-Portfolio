import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <section className="w-full min-h-screen relative z-[10] ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
