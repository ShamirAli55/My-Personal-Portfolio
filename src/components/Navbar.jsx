import { navItems } from "../constants";
import { NavLink } from "react-router-dom";
import { AppWindow } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import HiddenMenu from "./HiddenMenu";

const Navbar = () => {
  const MenuRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleAnimation = (e) => {
    e.currentTarget.classList.add("showborder");
  };

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

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      if (e.metaKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[199]">
      <nav className="flex justify-between items-center px-5 pt-8 pb-4 text-foreground">
        {isOpen && (
          <HiddenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}

        <div className="h-12">
          {isDarkMode ? (
            <img
              src="/assets/logo.svg"
              className="h-full object-cover cursor-pointer"
              alt="Logo"
            />
          ) : (
            <img
              src="/assets/Dark_logo.png"
              className="h-full object-cover cursor-pointer"
              alt="Logo"
            />
          )}
        </div>

        <div className="items-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] bg-white/15 backdrop-blur-md border border-primary-foreground/20 justify-between gap-x-10 py-2 px-6 rounded-full hidden md:flex">
          {navItems
            .filter((item) => item.category === "Navigation")
            .map((item, index) => (
              <NavLink
                className="text-sm font-light text-primary cursor-pointer textline"
                to={item.href}
                duration={180}
                smooth={true}
                offset={15}
                key={index}
                onMouseEnter={(e) => handleAnimation(e)}
              >
                {item.name}
              </NavLink>
            ))}
        </div>

        <div
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          ref={MenuRef}
        >
          <AppWindow color="hsl(var(--primary))" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
