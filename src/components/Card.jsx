import { motion } from "framer-motion";
import { useRef } from "react";

const Card = ({ style, text, image, containerRef }) => {
  const cardRef = useRef();

  return image && !text ? (
    <motion.img
      ref={cardRef}
      className="absolute w-8 md:w-15 cursor-grab"
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
      className="absolute w-[8rem] px-0.5 py-3 md:px-2 md:py-4 text-[10px] md:text-md text-center rounded-full ring ring-opposite/40 font-extralight md:w-[10rem] cursor-grab"
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

export default Card;
