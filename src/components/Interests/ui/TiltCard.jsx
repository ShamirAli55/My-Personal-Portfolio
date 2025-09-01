import { motion } from "framer-motion";
import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    innerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.01 }}
    >
      <div
        ref={innerRef}
        className="transition-transform duration-300 will-change-transform"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        {children}
      </div>
    </motion.div>
  );
}
