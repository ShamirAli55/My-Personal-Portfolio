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
      <div
        className="
    grid gap-6
    grid-cols-1
    md:grid-cols-6
    auto-rows-[200px]
  "
      >
        {/* Card 1 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 row-span-3 rounded-xl bg-bento-background p-4 relative duration-200 overflow-hidden pointer-events-none">
          <div className="z-10 flex flex-col justify-end md:justify-center h-full">
            <p className="text-5xl md:text-7xl font-semibold pt-45">Teck Stack</p>
            <p className="text-sm md:text-xl px-6 md:px-8 md:pt-12 pb-22 pt-12">
              A blend of code and creativity. I combine languages, frameworks,
              and tools to turn ideas into smooth, interactive experiences.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 sm:col-span-full md:col-span-3 rounded-xl bg-bento-background p-4 relative overflow-hidden">
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
              <p className="text-sm md:text-xl w-1/2">
                I'm based in Mars, and open to remote work worldwide.
              </p>
            </div>

            <div className="flex items-center gap-2 py-15 text-primary cursor-pointer ">
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
    </section>
  );
};

export default About;
