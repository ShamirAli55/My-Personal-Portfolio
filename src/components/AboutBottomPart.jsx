import { motion } from "framer-motion";

const AboutBottomPart = () => {
  return (
    <section className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-16 px-6 relative">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start w-full">
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.03 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-[420px] h-72 md:h-[460px] rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px] [perspective:1200px]"
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

        <div className="space-y-5 text-left font-[Funnel-Display]">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[Funnel-Sans] gradient-text"
          >
            About Me
          </motion.h1>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Crafting digital experiences excites me
            <span className="hidden md:inline"> — </span> blending design,
            interaction, and motion is where ideas truly come alive.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            With the MERN stack and a solid foundation in JavaScript, I
            transform concepts into seamless, functional, and intuitive
            applications.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I also work with GSAP, Framer Motion, Swiper, and Lenis, while
            exploring Three.js to bring immersive 3D interactions to the web.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            On the academic side, I’m sharpening my skills in C++ and diving
            deeper into Python, building the problem-solving mindset that powers
            projects beyond just web development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:flex items-center justify-center md:justify-start gap-2 text-primary md:pt-4"
          >
            <span className="spin inline-block text-lg">🌍</span>
            <span className="text-primary/70 text-sm md:text-base font-semibold tracking-wide">
              Beyond code, I thrive on sleek design and fresh tech vibes.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutBottomPart;
