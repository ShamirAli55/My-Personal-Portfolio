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
        className="h-[45vh] w-full px-8 md:px-16 pt-4 pb-36 md:pb-4 relative 
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
            </div>
          </div>

          <div className="h-1/2 w-full md:h-full md:w-1/2 rounded-lg md:pt-0 pt-6">
            <div className="flex items-start justify-around">
              <div className="text-left">
                <h1 className="text-md text-primary/50 font-semibold md:pb-2">
                  General
                </h1>
                {Navigation.map((item, index) => (
                  <FooterButn name={item.name} to={item.href} key={index} />
                ))}
              </div>

              <div className="text-left">
                <h1 className="text-md text-primary/50 font-semibold md:pb-2">
                  Social
                </h1>
                {socialLinks.map((item, index) => (
                  <FooterButn name={item.name} to={item.href} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-6 gap-4 md:gap-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 text-xs md:text-md">
          <p>© {date.getFullYear()} Shamir Ali. All rights reserved</p>
          <div className="flex gap-2 md:gap-4">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mt-2 md:mt-0">
          <ThemeToggle />
          <div className="flex gap-3 md:gap-4">
            <a href="https://github.com/ShamirAli55" target="_blank">
              <Github className="w-5 h-5 md:h-6 md:w-6" />
            </a>
            <a href="" target="_blank">
              <Linkedin className="w-5 h-5 md:h-6 md:w-6" />
            </a>
            <a href="#" target="_blank">
              <Twitter className="w-5 h-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs md:text-lg py-6 w-full md:w-auto text-center">
        Crafted with ❤️ by Shamir Ali | Full Stack Developer
      </p>

    </section>
  );
};

export default Footer;
