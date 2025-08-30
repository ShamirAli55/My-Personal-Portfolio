import Button from "../components/Button";
import MagneticButton from "../components/MagneticButn";
import OverLay from "../components/OverLay";

const Contact = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-16 text-center text-primary relative overflow-x-hidden z-1">
        <OverLay src={"/assets/GradientLiquid.jpg"} ShowCurves={true} />

        <h1 className="text-2xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
          CODE <span className="gradient-text">ANIMATE</span> CREATE
        </h1>

        <div className="py-8">
          <MagneticButton>
            <Button name={"Get In Touch"} to={"contact"} />
          </MagneticButton>
        </div>

        <p className="text-sm md:text-xl font-semibold md:mb-2 py-4 px-6">
          Building more than websites creating digital experiences that last.
        </p>
        <p className="text-gray-400 max-w-xl md:px-8 px-4 text-[10px] md:text-lg">
          I design and build experiences that not only look good but work
          seamlessly balancing creativity with performance.
        </p>
      </section>
    </>
  );
};

export default Contact;
