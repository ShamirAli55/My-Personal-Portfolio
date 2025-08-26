import EmailCopyButton from "../components/EmailCopyButton";
import Card from "../components/Card";
import ImageWrapper from "../components/ImageWrapper";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/Globe";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 py-10 bg-background text-primary"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-6 auto-rows-[200px]">
        {/* Card 1 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-2  md:row-span-3 rounded-xl  p-4 relative duration-200 overflow-hidden pointer-events-none z-10 border border-opposite/20 transition shadow-md">
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
        <div className="col-span-1 sm:col-span-full md:col-span-3 rounded-xl p-5 relative border border-opposite/20 transition duration-300 shadow-md overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl md:text-5xl text-primary/60 pointer-events-none cursor-none">
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
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-2 rounded-xl border border-opposite/20 transition duration-300 shadow-md p-4 relative overflow-hidden z-10 text-primary">
          <div className="h-full z-10 w-full text-left px-8 flex flex-col md:justify-between">
            <div className="pointer-events-none">
              <p className=" text-4xl py-4">Time Zone</p>
              <p className="text-xs md:text-lg md:px-2 w-2/3  md:w-1/2">
                I'm based in Mars, and open to remote work worldwide.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-6 md:py-15 text-primary cursor-pointer ">
              <MapPin size={30} color="hsl(var(--primary))" />
              <span className="text-sm md:text-xl ">Islamabad, Pakistan</span>
            </div>
          </div>
          {/* <figure className="absolute top-40 -right-50 md:right-[-25%] md:top-[5%] cursor-grab">
            <Globe />
          </figure> */}
        </div>
        {/* Card 4 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-xl p-4 flex border border-opposite/20 transition duration-300 shadow-md items-center justify-center"></div>

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

        {/* Card 6 */}
        <div className="col-span-1 sm:col-span-full md:col-span-2 rounded-xl border border-opposite/20 transition duration-300 shadow-md p-4 flex items-center justify-center">
          <p>Flexible Timezones</p>
        </div>
      </div>

      <h1 className="text-3xl  md:hidden font-bold text-primary pt-8 font-[Funnel-Sans]">
        About Me
      </h1>

      <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-22">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          <ImageWrapper />

          <div className="space-y-6 text-left ml-2 leading-[20px] font-[Funnel-Display]">
            <h1 className="text-3xl hidden md:block md:text-5xl font-bold font-[Funnel-Sans]">
              About Me
            </h1>

            <p className="text-primary text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
              I build for the web because UI and animations keep me engaged
              there’s nothing more satisfying than bringing interfaces to life.
            </p>

            <p className="text-primary text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
              Using the MERN stack and a solid foundation in JavaScript, I
              transform rough ideas into smooth, functional, and intuitive
              experiences.
            </p>

            <p className="text-primary  text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
              I also work with GSAP, Framer Motion, Swiper, and Lenis and I’m
              currently exploring Three.js to bring 3D interactions to the web.
            </p>

            <p className="text-primary  text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
              On the academic side, I’m strengthening my skills in C++ and
              diving into Python, sharpening the problem-solving foundations
              that enable me to tackle projects beyond web development.
            </p>

            <p className="hidden md:block text-primary md:text-center px-2 md:text-md md:py-2 tracking-tight md:tracking-wider leading-[22px]">
              <span className="spin inline-block">🌍</span>
              <span className="text-primary md:text-primary/60 text-xs md:text-md font-semibold">
                {" "}
                Beyond code, I thrive on sleek design and fresh tech vibes.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
