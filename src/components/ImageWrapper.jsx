import { motion } from "framer-motion";

const ImageWrapper = () => {
  return (
    <div className="flex justify-center md:justify-start w-full">
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-[450px] h-80 md:h-[450px] rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px] [perspective:1000px]"
      >
        <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center overflow-hidden">
          <motion.img
            src="assets/images/Profile_image.png"
            alt="Shamir Ali"
            className="rounded-2xl object-cover w-full h-full"
            initial={{ rotateY: -90 }}
            whileInView={{ rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ImageWrapper;
