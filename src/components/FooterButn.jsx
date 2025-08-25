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
      top: "-70%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!isMdUp() || !txtRef.current) return;
    gsap.to(txtRef.current, {
      top: "25%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const sync = () => {
      if (!txtRef.current) return;
      if (isMdUp()) {
        gsap.set(txtRef.current, { top: "25%" }); // text starts visible
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
        className="px-12 py-4 transition-all h-10 w-full relative overflow-hidden text-left"
      >
        <div
          ref={txtRef}
          className="absolute flex flex-col gap-3 justify-start items-start left-0"
        >
          <span className="flex text-[10px] md:text-xl font-light">
            <span>{name}</span>
            <span className="my-1 mx-2">
              <ArrowUpRight size={18} color="hsl(var(--opposite))" />
            </span>
          </span>
          <span className="flex text-[10px] md:text-xl font-light">
            <span>{name}</span>
            <span className="my-1 mx-2">
              <ArrowUpRight size={18} color="hsl(var(--opposite))" />
            </span>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default FooterButn;
