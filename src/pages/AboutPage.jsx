import AboutBottomPart from "../components/AboutBottomPart";
import Experience from "../sections/Experience";
import { experiences } from "../constants";
import GitHubStats from "../components/GitHubStats";
const AboutPage = () => {
  return (
    <section className="min-h-screen w-full bg-background text-primary pt-12 md:pt-0">
      <h1 className="container text-3xl gradient-text md:hidden font-bold text-primary pt-8 font-[Funnel-Sans] graident-text">
        About Me
      </h1>
      <AboutBottomPart />
      <div className="w-full relative container">
        <Experience data={experiences} />
      </div>
      <div className="relative container">
        <GitHubStats />
      </div>
    </section>
  );
};

export default AboutPage;
