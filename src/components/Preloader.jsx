import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [counter, setCounter] = useState(0);

  // Manages the main progress bar's animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => onDone?.(), 800);
        return 100;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onDone]);

  // Manages the counter's animation for a smoother feel
  useEffect(() => {
    if (percent >= 30) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev < percent) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [percent]);

  // Component for the rolling number animation
  const RollingNumber = ({ value, pad = 3 }) => (
    <div className="flex space-x-[2px]">
      {String(value)
        .padStart(pad, "0")
        .split("")
        .map((digit, i) => (
          <div
            key={i}
            className="relative w-[40px] h-[60px] overflow-hidden flex justify-center"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={digit}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute text-white text-6xl font-bold"
              >
                {digit}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
    </div>
  );

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Loading text and percentage */}
      <div className="text-white text-4xl mb-4 font-semibold">
        Loading {percent}%
      </div>

      {/* Middle progress bar */}
      <div className="w-[300px] h-[20px] bg-neutral-800 overflow-hidden rounded">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>

      {/* Bottom-left counter with smooth animation */}
      <div className="absolute bottom-6 left-6">
        <RollingNumber value={counter} pad={3} />
      </div>
    </motion.div>
  );
}