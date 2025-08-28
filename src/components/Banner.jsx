import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const arrowsRef = useRef([]);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        gsap.to(arrowsRef.current, {
          rotate: 0,
          duration: 0.5,
          ease: "easeInOut",
        });
      } else if (currentScroll < lastScroll) {
        gsap.to(arrowsRef.current, {
          rotate: 180,
          duration: 0.5,
          ease: "easeInOut",
        });
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <section className="min-h-[50vh] relative bg-muted w-full overflow-hidden flex items-center py-32">
      <div className="slider md:h-1/2 bg-opposite text-primary-foreground py-4 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex text-lg md:text-5xl gap-x-5 items-center"
          >
            <ArrowRight
              color="hsl(var(--primary))"
              className="h-12 w-12 md:h-14 md:w-14 bg-primary-foreground rounded-full"
              ref={(el) => (arrowsRef.current[i * 3] = el)}
            />
            <h4>Experience</h4>
            <ArrowRight
              color="hsl(var(--primary))"
              className="h-12 w-12 md:h-14 md:w-14 bg-primary-foreground rounded-full"
              ref={(el) => (arrowsRef.current[i * 3 + 1] = el)}
            />
            <h4>Content</h4>
            <ArrowRight
              color="hsl(var(--primary))"
              className=" h-12 w-12 md:h-14 md:w-14 bg-primary-foreground rounded-full"
              ref={(el) => (arrowsRef.current[i * 3 + 2] = el)}
            />
            <h4>Development</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
