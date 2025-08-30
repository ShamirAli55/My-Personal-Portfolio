import { motion } from "framer-motion";

const AboutBottomPart = () => {
  return (
    <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-12 relative px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start w-full">
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[450px] h-80 md:h-[450px] rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px] [perspective:1000px]"
          >
            <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center overflow-hidden">
              <motion.img
                src="assets/images/Profile_image.png"
                alt="Shamir Ali"
                loading="lazy"
                className="rounded-2xl object-cover w-full h-full"
                initial={{ rotateY: -90 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 text-left ml-2 leading-[20px] font-[Funnel-Display]">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl hidden md:block md:text-5xl font-bold font-[Funnel-Sans] gradient-text"
          >
            About Me
          </motion.h1>

          <p className="about-text">
            Crafting digital experiences excites me{" "}
            <span className="hidden md:inline"> — </span>blending design,
            interaction, and motion is where ideas truly come alive.
          </p>

          <p className="about-text">
            With the MERN stack and a solid foundation in JavaScript, I
            transform concepts into seamless, functional, and intuitive
            applications.
          </p>

          <p className="about-text">
            I also work with GSAP, Framer Motion, Swiper, and Lenis, while
            exploring Three.js to bring immersive 3D interactions to the web.
          </p>

          <p className="about-text">
            On the academic side, I’m sharpening my skills in C++ and diving
            deeper into Python, building the problem-solving mindset that powers
            projects beyond just web development.
          </p>

          <p className="hidden md:block text-primary md:text-center px-2 md:text-md md:py-2 tracking-tight md:tracking-wider leading-[22px]">
            <span className="spin inline-block">🌍</span>
            <span className="text-primary md:text-primary/60 text-xs md:text-md font-semibold">
              {" "}
              Beyond code, I thrive on sleek design and fresh tech vibes.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBottomPart;
