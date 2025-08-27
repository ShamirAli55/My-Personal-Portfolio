import { useState, useLayoutEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils.js";
import gsap from "gsap";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ActiveTheme = useRef(null);

  useLayoutEffect(() => {
    const Theme = localStorage.getItem("theme");
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      gsap.set(ActiveTheme.current, {
        x: "50%",
        backgroundColor: "rgba(59,130,246,0.4)",
      });
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      gsap.set(ActiveTheme.current, {
        x: "-50%",
        backgroundColor: "rgba(253,224,71,0.4)",
      }); 
    }
  }, []);

  const HandleThemeToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      gsap.to(ActiveTheme.current, {
        x: "-50%",
        backgroundColor: "rgba(253,224,71,0.4)", 
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      gsap.to(ActiveTheme.current, {
        x: "50%",
        backgroundColor: "rgba(59,130,246,0.4)", 
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div>
      <div className="relative h-9 w-18 text-center rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_hsl(var(--opposite)/0.2)] bg-white/10">
        <div
          ref={ActiveTheme}
          className={cn(
            "h-full w-1/2 rounded-full absolute pointer-events-none transition-colors"
          )}
        ></div>

        <button
          onClick={HandleThemeToggle}
          className="text-zinc-600 flex items-center relative z-10 p-2 w-full justify-between outline-0 cursor-pointer"
        >
          <span>
            <Sun className="text-yellow-400" size={17} />
          </span>
          <span>
            <Moon className="text-opposite" size={17} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
