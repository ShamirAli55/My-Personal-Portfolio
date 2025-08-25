import ThemeToggle from "./ThemeToggle";
import { navItems } from "../constants";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import FooterButn from "./FooterButn";
const Footer = () => {
  const date = new Date();

  const Navigation = navItems.filter((item) => item.category === "Navigation");
  const socialLinks = navItems.filter((item) => item.category === "Social");
  return (
    <section className="min-h-fit w-full overflow-hidden relative bg-background">
      <div
        className="h-[40vh] w-full px-8 md:px-16 pt-4 pb-2 relative 
      bg-white/10 border border-primary-foreground/20 
        shadow-[0_0_25px_rgba(0,0,0,0.2)] 
        dark:shadow-[0_0_25px_rgba(255,255,255,0.15)] 
        rounded-xl"
      >
        <div className="h-full w-full flex flex-col md:flex-row ">
          <div className="h-1/2 w-full md:h-full md:w-1/2  rounded-lg">
            <div>
              <img
                src="/public/assets/logo.png"
                className="h-10 w-10 object-cover"
                alt="Logo"
              />
              <p>Hello, I'm Shamir Ali a Full Stack developer</p>
            </div>
          </div>

          <div className="h-1/2 w-full md:h-full md:w-1/2 rounded-lg">
            <div className="flex items-start justify-around">
              <div className="text-left">
                <h1 className="text-lg font-bold">General</h1>
                {Navigation.map((item, index) => (
                  <FooterButn name={item.name} to={item.href} key={index} />
                ))}
              </div>

              <div>
                <h1 className="text-lg font-bold text-left">Social</h1>
                {socialLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    className="flex items-center gap-x-2 pt-2"
                    to={item.href}
                  >
                    <h4 className="text-[10px] md:text-lg font-light">
                      {item.name}
                    </h4>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left flex items-center justify-between px-8 pb-8 pt-2">
        <p>© {date.getFullYear()} Shamir Ali. All rights reserved</p>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <Github />
          <Linkedin />
          <Twitter />
        </div>
      </div>
    </section>
  );
};

export default Footer;
