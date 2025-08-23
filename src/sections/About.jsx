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
          <figure className="absolute top-40 -right-50 md:right-[-25%] md:top-[5%]">
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




      <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center">

               <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image / Avatar */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px]">
            <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center">
              {/* Placeholder image */}
              <img
                src="/profile.png"
                alt="Shamir Ali"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right: About Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <span className="text-purple-400">Shamir Ali</span>, a Software
            Engineering student passionate about turning ideas into smooth,
            interactive experiences. With a foundation in{" "}
            <span className="font-semibold">C++ (OOP, Data Structures)</span>{" "}
            and hands-on experience in{" "}
            <span className="font-semibold">
              HTML, CSS, JavaScript, React.js, PHP, and MySQL
            </span>
            , I enjoy building projects that blend{" "}
            <span className="italic">logic with creativity</span>.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 transition">
              <h3 className="text-xl font-semibold mb-2">🚀 Currently Exploring</h3>
              <p className="text-gray-300 text-sm">
                React animations, UI/UX design patterns, and backend development
                for scalable apps.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 transition">
              <h3 className="text-xl font-semibold mb-2">🤝 What I Value</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Clean, maintainable code</li>
                <li>User-friendly design</li>
                <li>Collaboration & learning</li>
                <li>Exploring new tools</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            🌍 Beyond code: I enjoy exploring modern web designs, studying
            software principles, and keeping up with creative tech trends.
          </p>
        </div>
      </div>

      </div>
    </section>
  );
};

export default About;
