import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const LazyCard = ({ style, text, image, containerRef }) => {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: containerRef.current, threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [containerRef]);

  if (!isVisible) return <div ref={cardRef} style={style} />;

  return image && !text ? (
    <motion.img
      ref={cardRef}
      className="absolute w-10 md:w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      ref={cardRef}
      className="absolute w-[8rem] px-2 py-4 text-xs md:text-md text-center rounded-full ring ring-opposite/40 font-extralight md:w-[10rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.02 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default LazyCard;
