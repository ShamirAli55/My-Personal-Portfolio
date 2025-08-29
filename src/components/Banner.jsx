import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  const arrowsRef = useRef([]); // DOM nodes of arrow wrappers
  const bannerRef = useRef(null);
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const inViewRef = useRef(false);
  const ticking = useRef(false);

  // Attach refs safely
  const setArrowRef = (el, i) => {
    if (el) arrowsRef.current[i] = el;
  };

  // Observe visibility of banner
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

  // Set transform origin once
  useEffect(() => {
    gsap.set(arrowsRef.current, { transformOrigin: "50% 50%" });
  }, []);

  // Scroll listener with requestAnimationFrame
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

  // Labels for each arrow group
  const labels = ["Experience", "Content", "Development"];

  return (
    <section
      ref={bannerRef}
      className="min-h-[50vh] relative bg-muted w-full overflow-hidden flex items-center py-32"
    >
      <div className="slider md:h-1/2 bg-opposite text-primary-foreground py-4 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex text-lg md:text-5xl gap-x-5 items-center"
          >
            {labels.map((label, j) => (
              <span key={j} className="flex items-center gap-x-3">
                <span
                  ref={(el) => setArrowRef(el, i * labels.length + j)}
                  className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-foreground"
                >
                  <Suspense
                    fallback={
                      <div className="h-7 w-7 md:h-9 md:w-9 bg-gray-400 rounded-full" />
                    }
                  >
                    <ArrowRight
                      className="h-7 w-7 md:h-9 md:w-9"
                      color="hsl(var(--primary))"
                    />
                  </Suspense>
                </span>
                <h4>{label}</h4>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
