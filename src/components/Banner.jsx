import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Banner = () => {
  const arrowsRef = useRef([]);
  const bannerRef = useRef(null);
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const inViewRef = useRef(false);
  const ticking = useRef(false);

  const setArrowRef = (el, i) => {
    if (el) arrowsRef.current[i] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          gsap.to(arrowsRef.current, {
            rotate: 0,
            duration: 0.2,
            overwrite: true,
          });
        }
      },
      { threshold: 0.2 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  useEffect(() => {
    gsap.set(arrowsRef.current, { transformOrigin: "50% 50%" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!inViewRef.current) {
        lastScrollY.current = window.scrollY;
        return;
      }
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
    <section
      ref={bannerRef}
      className="min-h-[50vh] relative bg-muted w-full overflow-hidden flex items-center py-32"
    >
      <div className="slider h-[10%] md:h-1/2 bg-opposite text-primary-foreground py-4 pointer-events-none uppercase">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex text-lg md:text-5xl gap-x-5 items-center"
          >
            <span
              ref={(el) => setArrowRef(el, i * 3)}
              className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
            >
              <ArrowRight
                className="h-6 w-6 md:h-9 md:w-9"
                color="hsl(var(--primary))"
              />
            </span>

            <h4>Innovative</h4>

            <span
              ref={(el) => setArrowRef(el, i * 3 + 1)}
              className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
            >
              <ArrowRight
                className="h-6 w-6 md:h-9 md:w-9"
                color="hsl(var(--primary))"
              />
            </span>

            <h4>Content</h4>

            <span
              ref={(el) => setArrowRef(el, i * 3 + 2)}
              className="inline-flex h-8 w-8 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
            >
              <ArrowRight
                className="h-6 w-6 md:h-9 md:w-9"
                color="hsl(var(--primary))"
              />
            </span>

            <h4>Mindset</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
