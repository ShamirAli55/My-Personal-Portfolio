import AboutBottomPart from "../components/AboutBottomPart";
import Experience from "../sections/Experience";
import { experiences } from "../constants";
const AboutPage = () => {
  return (
    <section className="container min-h-screen w-full bg-background text-primary">
      <h1 className="text-3xl md:hidden font-bold text-primary pt-8 font-[Funnel-Sans] graident-text">
        About Me
      </h1>
      <AboutBottomPart />

      <div className="w-full">
      <Experience data={experiences}/>
      </div>

    </section>
  );
};

export default AboutPage;
