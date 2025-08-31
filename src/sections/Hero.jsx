import Button from "../components/Button";
import EmailCopyButton from "../components/EmailCopyButton";
import { FlipWords } from "../components/FlipWords";
import StarsBackground from "../components/StarsBackground";
import "../styles/Hero.css"
const Hero = () => {
  const words = [
    "Full-Stack Dev",
    "UI/UX Designer",
    "Problem Solver",
    "Fast Learner  ",
  ];

  return (
    <section className="min-h-screen w-full flex items-start text-primary bg-background opacity-95 relative overflow-x-hidden">
      <div>
        <StarsBackground />
      </div>
      <div className=" h-full w-full relative">
        <h1 className="text-lg md:text-5xl font-bold pt-38 pb-18 md:px-28 capitalize leading-[45px] md:leading-[65px]">
          I craft seamless digital experiences{" "}
         <span className="whitespace-nowrap pr-2">while learning and growing everyday</span>
        </h1>
        <h3 className="text-lg md:text-3xl font-bold md:px-28 pb-5">
          <span className="text-lg md:text-4xl hey mr-2 inline-block">👋</span>
          Hello, I'm Shamir Ali <span className="inline-block">a</span>
          <span className="md:hidden inline-block">Full Stack developer.</span>
          <span className="md:inline-block pt-12 md:pt-0 hidden">
            <FlipWords
              words={words}
              className="font-bold text-primary text-sm md:text-3xl"
            />
          </span>
        </h3>
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-x-15 p-10 relative">
          <Button name={"Let's Connect"} to={"contact"} />
          <EmailCopyButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
