import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Button = ({ name, to }) => {
  const arrRef = useRef(null);

  const isMdUp = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  const handleEnter = () => {
    if (!isMdUp() || !arrRef.current) return;
    gsap.to(arrRef.current, {
      right: "-140%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!isMdUp() || !arrRef.current) return;
    gsap.to(arrRef.current, {
      right: "-55%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const sync = () => {
      if (!arrRef.current) return;
      if (isMdUp()) {
        gsap.set(arrRef.current, { right: "-55%" });
      } else {
        gsap.set(arrRef.current, { clearProps: "right" });
      }
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <NavLink to={to} duration={500} offset={-50} className="relative">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="
    px-4 md:px-6 py-2 md:font-bold rounded-full transition-all flex items-center md:justify-between
    duration-300 active:scale-95 cursor-pointer 
    text-primary md:text-sm text-lg
    bg-white/10 backdrop-blur-md border border-primary-foreground/20 
    shadow-[0_8px_32px_hsl(var(--opposite)/0.3)] 
    butn_overlay overflow-hidden
  "
      >
        <span>{name}</span>
        <span className="pl-2">
          <div className="relative bg-primary h-8 w-8 rounded-full overflow-hidden md:right-[-30%]">
            <div
              ref={arrRef}
              className="absolute flex items-center gap-2 top-1/2 right-[-55%] -translate-x-1/2 -translate-y-1/2"
            >
              <ArrowRight size={20} color="hsl(var(--background))" />
              <ArrowRight size={20} color="hsl(var(--background))" />
            </div>
          </div>
        </span>
      </button>
    </NavLink>
  );
};

export default Button;
