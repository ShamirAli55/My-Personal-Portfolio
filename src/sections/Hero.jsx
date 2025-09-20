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
    <section className="min-h-screen w-full flex items-center text-primary bg-background relative overflow-x-hidden overflow-y-auto">
      <div>
        <StarsBackground />
      </div>

      <div className="h-full w-full relative container">
        <h1 className="text-lg md:text-4xl lg:text-6xl lg:leading-snug font-bold pt-22">
          I craft seamless digital experiences while learning and growing everyday
        </h1>

        <h3 className="py-6 mt-12 text-xl md:text-2xl lg:text-3xl font-bold relative">
          <span className="text-lg md:text-4xl hey mr-2 inline-block">👋</span>
          Hello, I'm Shamir Ali {" "}&nbsp;
          <span className="inline-block md:hidden">
            a Full Stack developer.
          </span>
          <span className="whitespace-nowrap hidden md:inline-block">
            a <FlipWords
              words={words}
              className="font-bold text-primary text-md md:text-3xl block text-center"
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
