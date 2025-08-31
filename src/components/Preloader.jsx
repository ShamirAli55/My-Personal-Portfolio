import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState("loading");
  const progressRef = useRef({ value: 0 });

  useEffect(() => {
    gsap.to(progressRef.current, {
      value: 100,
      duration: 4,
      ease: "power2.inOut",
      onUpdate: () => {
        setPercent(Math.floor(progressRef.current.value));
      },
      onComplete: () => {
        setPercent(100);
        setTimeout(() => setPhase("reveal"), 400);
      },
    });
  }, []);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [phase]);


  const RollingNumber = ({ value, pad = 3 }) => (
    <div className="flex space-x-[4px]">
      {String(value)
        .padStart(pad, "0")
        .split("")
        .map((digit, i) => (
          <span
            key={i}
            className="text-primary-foreground text-7xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            {digit}
          </span>
        ))}
    </div>
  );

  const columns = 8; 
  const columnVariants = {
    initial: { y: 0 },
    up: { y: "-100%", transition: { duration: 1, ease: "easeInOut" } },
    down: { y: "100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[9999] flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {phase === "loading" && (
            <>
              <div className="w-[300px] h-[20px] bg-opposite overflow-hidden rounded">
                <motion.div
                  className="h-full bg-primary-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="absolute bottom-6 left-6">
                <RollingNumber value={percent} pad={3} />
              </div>

              <div className="absolute inset-0 bg-primary -z-10" />
            </>
          )}


          {phase === "reveal" && (
            <div className="absolute inset-0 flex">
              {Array.from({ length: columns }).map((_, i) => {
                const direction = Math.random() > 0.5 ? "up" : "down";
                return (
                  <motion.div
                    key={i}
                    className="flex-1 bg-opposite"
                    variants={columnVariants}
                    initial="initial"
                    animate={direction}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                    onAnimationComplete={() => {
                      if (i === columns - 1) {
                        setPhase("done");
                        onDone?.();
                      }
                    }}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
