import { navItems } from "../constants";
import { Link } from "react-scroll";
import { AppWindowMac } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleStorage = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[200]">
      <nav className="flex justify-between items-center px-5 pt-8 pb-4 text-foreground">
        <div className="h-12">
          {isDarkMode ? (
            <img
              src="/assets/logo.svg"
              className="h-full object-cover"
              alt="Logo"
            />
          ) : (
            <img
              src="/assets/Dark_logo.png"
              className="h-full object-cover"
              alt="Logo"
            />
          )}
        </div>

        <div className="items-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] bg-white/15 backdrop-blur-md border border-primary-foreground/20 justify-between gap-x-10 py-2 px-6 rounded-full hidden md:flex">
          {navItems.map((item, index) => (
            <Link
              className="text-sm font-light text-primary  cursor-pointer  textline showborder"
              to={item.href}
              duration={180}
              smooth={true}
              offset={15}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="cursor-pointer">
          <AppWindowMac color="hsl(var(--primary))" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
