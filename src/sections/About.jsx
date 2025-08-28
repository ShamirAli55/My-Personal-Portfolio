import EmailCopyButton from "../components/EmailCopyButton";
import Card from "../components/Card";
import Banner from "../components/Banner";
import { Frameworks } from "../components/Frameworks";
import AboutBottomPart from "../components/AboutBottomPart";
import { Globe } from "../components/Globe";
import { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const About = () => {
  const grid2Container = useRef();

  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  const useVisibility = (ref, setter) => {
    useEffect(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setter(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);
  };

  const frameworksRef = useRef();
  const cardsRef = useRef();
  const globeRef = useRef();

  useVisibility(frameworksRef, setShowFrameworks);
  useVisibility(cardsRef, setShowCards);
  useVisibility(globeRef, setShowGlobe);

  return (
    <section
      id="about"
      className="min-h-screen w-full py-10 bg-background text-primary overflow-x-hidden"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-6 auto-rows-[200px] px-6">
        {/* Card 1 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-2 md:row-span-3 rounded-xl p-4 relative duration-200 overflow-hidden pointer-events-none z-10 border border-opposite/20 transition shadow-md">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[2.1] right-[-4rem] top-[2rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 relative h-full flex flex-col text-left justify-end pb-4 md:py-10 px-2 md:px-6">
            <p className="mt-2 mb-2 text-xl w-full">Hi, I'm Shamir Ali</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty md:pr-8">
              Software engineering student focused on creating modern,
              user-friendly web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-opposite/10 via-opposite/10 to-primary-foreground/" />
        </div>

        {/* Card 2 */}
        <div
          ref={frameworksRef}
          className="col-span-1 sm:col-span-full md:col-span-3 rounded-xl p-5 relative border border-opposite/20 transition duration-300 shadow-md overflow-hidden"
        >
          <div className="z-10 flex text-start flex-col h-full w-full relative">
            <p className="text-4xl font-bold">Tech Stack</p>
            <p className="text-xs md:text-[15px] w-[58%] pr-2 md:pr-4 py-6 md:tracking-tight">
              Where ideas meet execution. From frontend magic to backend logic,
              I use a mix of technologies to craft seamless digital experiences.
            </p>
          </div>
          {showFrameworks && (
            <div className="absolute right-0 top-0 w-full h-full start-[67%] md:start-[40%] scale-100">
              <Frameworks />
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div
          ref={globeRef}
          className="col-span-1 sm:col-span-full md:col-span-3 row-span-2 rounded-xl border border-opposite/20 transition duration-300 shadow-md p-4 relative overflow-hidden z-10 text-primary"
        >
          <div className="h-full z-10 w-full text-left px-4 flex flex-col md:justify-between">
            <div className="pointer-events-none">
              <p className="text-4xl py-4">Time Zone</p>
              <p className="text-xs md:text-lg ">
                I'm based in Pakistan, and open{" "}
                <span className="block">to remote work worldwide.</span>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-6 md:py-15 text-primary cursor-pointer">
              <MapPin size={30} color="hsl(var(--primary))" />
              <span className="text-sm md:text-xl">Islamabad, Pakistan</span>
            </div>
          </div>
          {/* {showGlobe && (
            <figure className="absolute top-40 -right-50 md:right-[-25%] md:top-[5%] cursor-grab">
              <Globe />
            </figure>
          )} */}
        </div>

        {/* Card 4 */}
        <div
          ref={cardsRef}
          className="col-span-1 sm:col-span-full md:col-span-4 rounded-xl p-4 flex border border-opposite/20 transition duration-300 shadow-md items-center justify-center overflow-hidden"
        >
          {showCards && (
            <div
              ref={grid2Container}
              className="relative flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-3xl md:text-5xl text-primary/60 pointer-events-none cursor-none">
                CODE IS CANVAS
              </p>

              <Card
                style={{ rotate: "-30deg", top: "55%", left: "45%" }}
                text="Frame"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="Logic"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "50%", left: "0%" }}
                text="Design Principles"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="Tools"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/dotnet-pink.png"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/blazor-pink.png"
                containerRef={grid2Container}
              />
            </div>
          )}
        </div>

        {/* Card 5 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-lg border border-opposite/20 transition duration-300 shadow-md p-4">
          <div className="flex flex-col justify-center items-center py-5 px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary">
              Do you want to start a project together?
            </h2>
            <div>
              <EmailCopyButton />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:hidden font-bold text-primary pt-8 font-[Funnel-Sans] gradient-text">
        About Me
      </h1>

      <AboutBottomPart />

      <Banner />
    </section>
  );
};

export default About;
