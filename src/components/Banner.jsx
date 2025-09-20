import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "../styles/banner.css";

const Banner = () => {
  const arrowsRef = useRef([]);
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const ticking = useRef(false);

  const setArrowRef = (el, i) => {
    if (el) arrowsRef.current[i] = el;
  };

  useEffect(() => {
    gsap.set(arrowsRef.current, { transformOrigin: "50% 50%" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const current = window.scrollY;
        if (current > lastScrollY.current) {
          gsap.to(arrowsRef.current, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        } else if (current < lastScrollY.current) {
          gsap.to(arrowsRef.current, {
            rotate: 180,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        }
        lastScrollY.current = current;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-[50vh] relative bg-muted w-full overflow-hidden flex items-center py-32">
      <div className="slider-container w-full overflow-hidden">
        <div className="slider h-[10%] md:h-1/2 bg-opposite text-primary-foreground py-4 pointer-events-none uppercase hover:animation-paused">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex text-2xl md:text-5xl gap-x-5 items-center"
            >
              <span
                ref={(el) => setArrowRef(el, i * 3)}
                className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
              >
                <ArrowRight
                  className="h-7 w-7 md:h-9 md:w-9"
                  color="hsl(var(--primary))"
                />
              </span>

              <h4>Innovative</h4>

              <span
                ref={(el) => setArrowRef(el, i * 3 + 1)}
                className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
              >
                <ArrowRight
                  className="h-7 w-7 md:h-9 md:w-9"
                  color="hsl(var(--primary))"
                />
              </span>

              <h4>Content</h4>

              <span
                ref={(el) => setArrowRef(el, i * 3 + 2)}
                className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
              >
                <ArrowRight
                  className="h-7 w-7 md:h-9 md:w-9"
                  color="hsl(var(--primary))"
                />
              </span>

              <h4>Mindset</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
