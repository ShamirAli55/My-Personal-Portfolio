import ImageWrapper from "./ImageWrapper";
const AboutBottomPart = () => {
  return (
    <div className="min-h-screen w-full mt-12 md:mt-28 flex flex-col md:flex-row items-center md:px-22 relative px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <ImageWrapper />

        <div className="space-y-6 text-left ml-2 leading-[20px] font-[Funnel-Display]">
          <h1 className="text-3xl hidden md:block md:text-5xl font-bold font-[Funnel-Sans] gradient-text">
            About Me
          </h1>

          <p className="text-primary text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
            I build for the web because UI and animations keep me engaged
            there’s nothing more satisfying than bringing interfaces to life.
          </p>

          <p className="text-primary text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
            Using the MERN stack and a solid foundation in JavaScript, I
            transform rough ideas into smooth, functional, and intuitive
            experiences.
          </p>

          <p className="text-primary  text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
            I also work with GSAP, Framer Motion, Swiper, and Lenis and I’m
            currently exploring Three.js to bring 3D interactions to the web.
          </p>

          <p className="text-primary  text-sm px-.5 md:px-2.5 w-full md:text-xl leading-[23px] font-light tracking-wide">
            On the academic side, I’m strengthening my skills in C++ and diving
            into Python, sharpening the problem-solving foundations that enable
            me to tackle projects beyond web development.
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
