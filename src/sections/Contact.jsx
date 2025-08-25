import Button from "../components/Button";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-16 text-center text-primary bg-background opacity-95"
    >
      <div className="mb-6">
        <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-2xl font-bold">
          AB
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
        CODE <span className="text-blue-500">ANIMATE</span>
        <br />
        CREATE
      </h1>

      <div className="py-4">
        <Button name={"Get In Touch"} to={"contact"} />
      </div>

      <p className="text-lg font-semibold mb-2">
        Building more than websites — creating digital experiences that last.
      </p>
      <p className="text-gray-400 max-w-xl">
        I design and build experiences that not only look good but work
        seamlessly — balancing creativity with performance.
      </p>
    </section>
  );
};

export default Contact;
