import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setTimeout(() => onDone?.(), 500); // notify parent
        return 100;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center text-4xl z-[9999]"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      Loading {percent}%
    </motion.div>
  );
}
