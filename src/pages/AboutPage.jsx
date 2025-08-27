import AboutBottomPart from "../components/AboutBottomPart";
import Experience from "../sections/Experience";
import { experiences } from "../constants";
import GitHubStats from "../components/GitHubStats";
const AboutPage = () => {
  return (
    <section className="container min-h-screen w-full bg-background text-primary">
      <h1 className="text-3xl md:hidden font-bold text-primary pt-8 font-[Funnel-Sans] graident-text">
        About Me
      </h1>
      <AboutBottomPart />
      <div className="w-full relative">
        <Experience data={experiences} />
      </div>
      <div className="relative">
      <GitHubStats />
      </div>
    </section>
  );
};

export default AboutPage;
