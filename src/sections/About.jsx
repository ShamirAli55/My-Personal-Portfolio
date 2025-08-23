import EmailCopyButton from "../components/EmailCopyButton";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/Globe";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 py-10 bg-background"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-6 auto-rows-[200px]">
        {/* Card 1 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-2 md:row-span-3 rounded-xl bg-bento-background p-4 relative duration-200 overflow-hidden pointer-events-none z-10">
          <div className="z-10 flex flex-col justify-end md:justify-center h-full pt-12">
            <p className="text-4xl md:text-7xl font-semibold pt-45">
              Teck Stack
            </p>
            <p className="text-sm md:text-xl px-2 md:px-22 md:pt-10 py-6">
              A blend of code and creativity. I combine languages, frameworks,
              and tools to turn{" "}
              <span className="whitespace-nowrap md:whitespace-normal">
                ideas into smooth, interactive experiences.
              </span>
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 z-[-1]">
            <Frameworks />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 rounded-xl bg-bento-background p-5 relative overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-primary/60 pointer-events-none">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "-30deg", top: "55%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "50%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
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
        </div>

        {/* Card 3 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-2 rounded-xl bg-bento-background p-4 relative overflow-hidden z-10 text-primary">
          <div className="h-full z-10 w-full text-left px-8 flex flex-col md:justify-between">
            <div className="pointer-events-none">
              <p className=" text-4xl py-4">Time Zone</p>
              <p className="text-sm md:text-xl w-2/3  md:w-1/2">
                I'm based in Mars, and open to remote work worldwide.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-6 md:py-15 text-primary cursor-pointer ">
              <MapPin size={30} color="hsl(var(--primary))" />
              <span className="text-sm md:text-xl ">Islamabad, Pakistan</span>
            </div>
          </div>
          <figure className="absolute top-40 -right-50 md:right-[-25%] md:top-[5%] cursor-grab">
            <Globe />
          </figure>
        </div>
        {/* Card 4 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-xl bg-bento-background p-4 flex items-center justify-center"></div>

        {/* Card 5 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-xl bg-bento-background p-4">
          <div className="flex flex-col justify-center items-center py-5 px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary">
              Do you want to start a project together?
            </h2>
            <div>
              <EmailCopyButton />
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-xl bg-bento-background p-4 flex items-center justify-center">
          <p>Flexible Timezones</p>
        </div>
      </div>

      <h1 className="text-3xl  md:hidden font-bold text-white pt-8">
        About Me
      </h1>

      <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-22">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
          {/* Left: Image / Avatar */}

          <div className="flex justify-center md:justify-start w-full ">
            <div className="w-full md:w-[450px] h-80 md:h-[450px] rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px]">
              <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center">
                {/* Profile Image */}
                <img
                  src="../../src/assets/images/Profile_image.png"
                  alt="Shamir Ali"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-6 text-left ml-2 leading-[20px]">
            <h1 className="text-3xl hidden md:block md:text-5xl font-bold text-white">
              About Me
            </h1>
            <p className="text-primary text-sm md:text-[17px] tracking-wider leading-[20px]">
              I build for the web because UI and animations keep me hooked —
              nothing’s more fun than making interfaces feel alive. With the
              MERN stack (MongoDB, Express, React, Node.js) and a solid base in
              JavaScript and PHP, I turn rough ideas into smooth, functional,
              and aesthetic experiences. Always chasing that perfect mix of
              design and code, I’m the kind of developer who tweaks pixels and
              logic until it just feels right.
            </p>

            <p className="text-primary text-sm md:text-[17px] tracking-wider leading-[20px]">
              On the academic side, I’m deepening my understanding of C++ and
              starting to explore Python, sharpening the fundamentals that make
              me a better problem-solver and preparing me to branch into areas
              beyond web.
            </p>
            <p className="text-gray-400 text-md">
              🌍 Beyond code, I thrive on sleek design, sharp principles, and
              fresh tech vibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
