import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useLayoutEffect, useState, useMemo } from "react";
import { experiences } from "../constants";

const Experience = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [dotPositions, setDotPositions] = useState([]);
  const [currentY, setCurrentY] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const dots = Array.from(el.querySelectorAll(".timeline-dot")).map(
        (dot) => dot.offsetTop
      );
      setDotPositions(dots);

      const lineEl = el.querySelector(".timeline-line");
      if (lineEl) {
        setLineHeight(lineEl.offsetHeight);
      }
    };

    measure();

    const handleResize = () => {
      requestAnimationFrame(measure);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const markerSize = 48; // w-12 h-12 marker
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(0, lineHeight - markerSize)]
  );
  const lineFill = useTransform(y, (val) => `${val + markerSize / 2}px`);

  useMotionValueEvent(y, "change", (latest) => {
    setCurrentY(latest);
  });

  const timelineItems = useMemo(
    () =>
      experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative flex items-center ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          } justify-center`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-primary/10 border border-opposite text-opposite 
                       rounded-2xl shadow-lg p-6 w-full md:w-[40%]"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm uppercase tracking-wide text-purple-400">
              {exp.date}
            </p>
            <h3 className="mt-2 text-xl font-bold">{exp.title}</h3>
            <p className="text-neutral-400 text-xs font-medium">{exp.job}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-opposite">
              {exp.contents.map((content, idx) => (
                <li
                  key={idx}
                  className="text-sm md:text-lg lg:text-xl leading-relaxed text-left md:px-4 md:tracking-wide"
                >
                  {content}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="timeline-dot absolute left-1/2 -translate-x-1/2 
                       bg-sky-300 border-4 border-neutral-900 w-5 h-5 rounded-full z-10 hidden md:block"
            style={{ willChange: "transform, box-shadow" }}
            animate={{
              scale:
                dotPositions[index] &&
                Math.abs(dotPositions[index] - currentY) < 30
                  ? [1, 1.3, 1]
                  : 1,
              boxShadow:
                dotPositions[index] &&
                Math.abs(dotPositions[index] - currentY) < 30
                  ? "0 0 12px rgba(168,85,247,1)"
                  : "0 0 0px rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )),
    [dotPositions, currentY]
  );

  return (
    <div
      ref={containerRef}
      className="sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:my-40 relative"
    >
      <div className="mb-32 text-center">
        <p className="uppercase tracking-widest text-opposite-400 text-sm">
          My Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Driven by <span className="gradient-text">Curiosity</span>
        </h2>
      </div>

      <div className="relative flex justify-center">
        <div
          className="timeline-line absolute top-0 bottom-0 left-1/2 -translate-x-1/2 
                       w-[4px] bg-neutral-700 hidden md:block"
        />

        <motion.div
          style={{ height: lineFill, willChange: "height" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] 
                     timeline-gradient rounded-full hidden md:block"
        />

        <motion.div
          style={{ x: "-50%", y, willChange: "transform" }}
          className="absolute top-0 left-1/2 w-12 h-12 rounded-full 
                     border-4 border-purple-500 bg-primary-foreground flex items-center justify-center z-20 hidden md:flex"
        >
          <img
            src="/assets/images/Profile_image.png"
            alt="timeline marker"
            className="w-8 h-8 rounded-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col gap-20 w-full">{timelineItems}</div>
      </div>
    </div>
  );
};

export default Experience;
