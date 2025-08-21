"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [duration, words.length]);

  const currentWord = words[currentIndex];
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <div
      className="relative inline-block"
      style={{ width: `${longestWord.length}ch` }} 
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 20, x :10 , filter: "blur(4px)" }}
          animate={{ opacity: 1, y: -30, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.4 }}
          className={twMerge("absolute left-0 top-0", className)}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
