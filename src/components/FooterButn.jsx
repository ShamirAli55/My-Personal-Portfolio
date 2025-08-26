import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const FooterButn = ({ name, to }) => {
  const txtRef = useRef(null);

  const isMdUp = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  const handleEnter = () => {
    if (!isMdUp() || !txtRef.current) return;
    gsap.to(txtRef.current, {
      top: "-100%", // cleaner slide-up
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!isMdUp() || !txtRef.current) return;
    gsap.to(txtRef.current, {
      top: "0%", // reset to start position
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const sync = () => {
      if (!txtRef.current) return;
      if (isMdUp()) {
        gsap.set(txtRef.current, { top: "0%" }); // start at 0
      } else {
        gsap.set(txtRef.current, { clearProps: "top" });
      }
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <NavLink to={to} className="relative">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="px-14 py-4 transition-all h-10 w-full relative overflow-hidden text-left hover:text-primary"
      >
        <div
          ref={txtRef}
          className="absolute flex flex-col gap-3 left-0"
        >
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="flex items-center text-[10px] md:text-xl font-light"
            >
              <span>{name}</span>
              <ArrowUpRight
                size={18}
                className="ml-2"
                color="hsl(var(--opposite))"
              />
            </span>
          ))}
        </div>
      </div>
    </NavLink>
  );
};

export default FooterButn;
