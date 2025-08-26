import AboutBottomPart from "../components/AboutBottomPart";
const AboutPage = () => {
  return (
    <section className="min-h-screen w-full bg-background text-primary">
      <h1 className="text-3xl md:hidden font-bold text-primary pt-8 font-[Funnel-Sans] graident-text">
        About Me
      </h1>
      <AboutBottomPart />
    </section>
  );
};

export default AboutPage;
