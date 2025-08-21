import { Link } from "react-scroll";
import { useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Button = ({ name, to }) => {
  const arrRef = useRef(null);

  const handleEnter = () => {
    gsap.to(arrRef.current, {
      right: "-140%",
      duration: 0.5,
    });
  };

  const handleLeave = () => {
    gsap.to(arrRef.current, {
      right: "-55%",
      duration: 0.5,
    });
  };

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-50}
      className="relative"
    >
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="px-4 md:px-6 py-2 md:font-bold rounded-full transition-all flex items-center md:justify-between
        duration-300 active:scale-95 cursor-pointer text-primary md:text-sm text-lg
        bg-white/10 backdrop-blur-md border border-primary-foreground/20 
        shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-primary hover:text-primary-foreground text-lg "
      >
        {name}
        <span className="pl-2">
          <div className="relative bg-primary text-primary h-8 w-8 rounded-full overflow-hidden md:right-[-30%]">
            <div
              ref={arrRef}
              className="absolute flex items-center gap-2 top-1/2 right-[-50%] -translate-x-1/2 -translate-y-1/2"
            >
              <ArrowRight size={20} color="hsl(var(--background))" />
              <ArrowRight size={20} color="hsl(var(--background))" />
            </div>
          </div>
        </span>
      </button>
    </Link>
  );
};

export default Button;
