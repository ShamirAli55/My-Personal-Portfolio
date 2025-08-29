import { lazy, Suspense } from "react";

const ImageWrapper = lazy(() => import("./ImageWrapper"));

const AboutBottomPart = () => {
  return (
    <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-22 relative px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <Suspense
          fallback={<div className="h-64 w-full bg-gray-200 animate-pulse" />}
        >
          <ImageWrapper />
        </Suspense>

        <div className="space-y-6 text-left ml-2 leading-[20px] font-[Funnel-Display]">
          <h1 className="text-3xl hidden md:block md:text-5xl font-bold font-[Funnel-Sans] gradient-text">
            About Me
          </h1>

          <p className="about-text">
            Crafting digital experiences excites me blending design,
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
