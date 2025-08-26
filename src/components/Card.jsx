import { motion } from "framer-motion";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
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
      className="absolute w-[8rem] px-2 py-4 text-xs md:text-md text-center rounded-full ring ring-gray-700 font-extralight md:w-[10rem] cursor-grab"
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
