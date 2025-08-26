import { navItems } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { AppWindow } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import HiddenMenu from "./HiddenMenu";

const Navbar = () => {
  const MenuRef = useRef(null);
  const location = useLocation();
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
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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

  // Helper to check if current path matches
  const isActive = (href) => location.pathname === href;

  // Check if we're inside a "More" link
  const isMoreActive = navItems
    .filter((item) => item.category !== "Navigation")
    .some((item) => location.pathname === item.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-[199]">
      <nav className="flex justify-between items-center px-5 pt-8 pb-4 text-foreground">
        {isOpen && (
          <HiddenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}

        {/* Logo */}
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

        {/* Desktop Nav */}
        <div className="items-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] bg-white/15 backdrop-blur-md border border-primary-foreground/20 justify-between gap-x-10 py-1.5 px-6 rounded-full hidden md:flex">
          {navItems
            .filter((item) => item.category === "Navigation")
            .map((item, index) => (
              <NavLink
                className={({ isActive: navIsActive }) =>
                  `text-sm font-light cursor-pointer textline ${
                    navIsActive
                      ? "underline underline-offset-4 text-primary"
                      : "text-primary"
                  }`
                }
                to={item.href}
                key={index}
                onMouseEnter={(e) => handleAnimation(e)}
              >
                {item.name}
              </NavLink>
            ))}

          {/* More Section */}
          <div className="relative group">
            <span
              className={`text-sm font-light cursor-pointer ${
                isMoreActive
                  ? "underline underline-offset-4 text-primary"
                  : "text-primary"
              }`}
            >
              More
            </span>
            <div
              className="absolute right-0 top-full mt-4 invisible opacity-0 
              group-hover:visible group-hover:opacity-100 
              transition-all duration-200 ease-in-out
              grid grid-cols-6 auto-rows-[140px] gap-4 p-4 rounded-2xl shadow-xl 
              bg-background backdrop-blur-md border border-primary-foreground/20 
              w-[720px] z-50"
            >
              {navItems
                .filter((item) => item.category !== "Navigation" && item.category !== "Social")
                .map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.href}
                    onClick={() => {
                      const group = document.activeElement;
                      if (group) group.blur();
                    }}
                    className={`flex flex-col items-start justify-center rounded-xl bg-black/5 dark:bg-white/5 p-4 hover:bg-black/10 dark:hover:bg-white/10 transition-all ${
                      isActive(item.href) ? "ring-2 ring-primary" : ""
                    } 
                    ${
                      idx % 7 === 0
                        ? "col-span-2 row-span-2" 
                        : "col-span-2 row-span-1"
                    }`}
                  >
                    <item.icon className="h-6 w-6 mb-2 text-primary" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                ))}
            </div>
          </div>
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
