import Button from "../components/Button";
import MagneticButton from "../components/MagneticButn";
const Contact = () => {

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 text-center text-primary bg-background opacity-95">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide ">
        CODE <span className="text-blue-500">ANIMATE</span> CREATE
      </h1>

      <div className="py-4">
        <MagneticButton>
          <Button name={"Get In Touch"} to={"contact"} />
        </MagneticButton>
      </div>

      <p className="text-lg font-semibold mb-2 py-4">
        Building more than websites — creating digital experiences that last.
      </p>
      <p className="text-gray-400 max-w-xl px-6">
        I design and build experiences that not only look good but work
        seamlessly — balancing creativity with performance.
      </p>
    </section>
  );
};

export default Contact;
