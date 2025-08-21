import { useState, useLayoutEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils.js";
import gsap from "gsap";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const ActiveTheme = useRef(null);

    useLayoutEffect(() => {
        const Theme = localStorage.getItem("theme");
        if (Theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            gsap.set(ActiveTheme.current, { x: "50%" });
        }
        else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            gsap.set(ActiveTheme.current, { x: "-50%" });
        }
    }, []);

    const HandleThemeToggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            gsap.to(ActiveTheme.current, { x: "-50%", duration: 0.5, ease: "power2.inOut" });
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            gsap.to(ActiveTheme.current, { x: "50%", duration: 0.5, ease: "power2.inOut" });
        }
    };

    return (
        <div>
            <div className="h-10 w-22 text-center rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <div
                    ref={ActiveTheme}
                    className={cn(
                        "h-full w-1/2 rounded-full absolute bg-slate-300 opacity-35 pointer-events-none"
                    )}
                ></div>
                <button
                    onClick={HandleThemeToggle}
                    className="text-zinc-600 flex items-center relative z-10 p-3 w-full justify-between"
                >
                    <span>
                        <Sun className="text-yellow-400" size={20} />
                    </span>
                    <span>
                        <Moon className="text-white" size={20} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ThemeToggle;
