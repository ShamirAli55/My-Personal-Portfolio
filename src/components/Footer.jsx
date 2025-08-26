import ThemeToggle from "./ThemeToggle";
import { navItems } from "../constants";
import { Github, Linkedin, Twitter } from "lucide-react";
import FooterButn from "./FooterButn";
const Footer = () => {
  const date = new Date();

  const Navigation = navItems.filter(
    (item) => item.category === "Navigation" && item.name !== "More"
  );
  const socialLinks = navItems.filter((item) => item.category === "Social");
  return (
    <section className="min-h-fit w-full overflow-hidden relative bg-background">
      <div
        className="h-[45vh] w-full px-8 md:px-16 pt-4 pb-4 relative 
       border border-footer/40 
       shadow-[0_0_25px_rgba(0,0,0,0.2)] 
        rounded-xl bg-footer"
      >
        <div className="h-full w-full flex flex-col md:flex-row ">
          <div className="h-1/2 w-full md:h-full md:w-1/2  rounded-lg ">
            <div className="text-left">
              <img
                src="/assets/logo.png"
                className="h-10 w-10 object-cover"
                alt="Logo"
              />
              <div className="text-sm md:text-lg md:pr-46">
                <p>
                  Open to exciting collaborations & projects. Let’s create
                  something amazing together.
                </p>
              </div>

              <p className="mt-4 text-sm md:text-lg md:pt-22">
                Crafted with ❤️ by Shamir Ali | Full Stack Developer
              </p>
            </div>
          </div>

          <div className="h-1/2 w-full md:h-full md:w-1/2 rounded-lg pt-12 md:pt-0">
            <div className="flex items-start justify-around">
              <div className="text-left">
                <h1 className="text-xl font-bold pb-2">General</h1>
                {Navigation.map((item, index) => (
                  <FooterButn name={item.name} to={item.href} key={index} />
                ))}
              </div>

              <div className="text-left">
                <h1 className="text-xl font-bold pb-2">Social</h1>
                {socialLinks.map((item, index) => (
                  <FooterButn name={item.name} to={item.href} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left flex items-center justify-between px-4 md:px-8 pb-8 pt-28 md:pt-4 cursor-pointer">
        <p className="text-[8px] md:text-[15px] whitespace-nowrap px-4">
          © {date.getFullYear()} Shamir Ali. All rights reserved
        </p>

        <div className=" flex items-center gap-4 cursor-pointer mt-16 md:mt-0">
          <ThemeToggle />
          <div className="flex gap-4 justify-evenly pr-8">
            <a href="https://github.com/ShamirAli55" target="_blank">
              <Github />
            </a>
            <a href="" target="_blank">
              <Linkedin />
            </a>
            <a href="#" target="_blank">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
