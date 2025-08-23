import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // trigger when 30% of element is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      observer.disconnect();
    };
  }, []);

  // Word flipping logic, only runs if visible
  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, duration, words.length, isVisible]);

  const currentWord = words[currentIndex];
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      style={{ minWidth: `${longestWord.length}ch` }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 60, x: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: -30, x: 10, scale: 1 }}
          exit={{ opacity: 0, y: -60, x: 10, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={twMerge("absolute left-0 top-0", className)}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
