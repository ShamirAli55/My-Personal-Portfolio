import { Send } from "lucide-react";
import { cn } from "../lib/utils.js";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../components/3DEmail.jsx";

import { useThree } from "@react-three/fiber";
import { useMemo } from "react";

const RotatingModel = () => {
  const ref = useRef();
  const { size } = useThree();

  const original = useMemo(() => {
    if (size.width < 640) {
      return { position: [0, -2, 0], rotation: [0, 0, 0], scale: 3 };
    } else if (size.width < 1024) {
      return { position: [0, -3, 0], rotation: [0, 0, 0], scale: 4.5 };
    } else {
      return { position: [0, -4, 0], rotation: [0, 0, 0], scale: 6 };
    }
  }, [size.width]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x +=
        (original.rotation[0] - ref.current.rotation.x) * 0.05;
      ref.current.rotation.z +=
        (original.rotation[2] - ref.current.rotation.z) * 0.05;
      ref.current.rotation.y += 0.01;

      ref.current.position.x +=
        (original.position[0] - ref.current.position.x) * 0.1;
      ref.current.position.y +=
        (original.position[1] - ref.current.position.y) * 0.1;
      ref.current.position.z +=
        (original.position[2] - ref.current.position.z) * 0.1;

      ref.current.scale.set(original.scale, original.scale, original.scale);
    }
  });

  return (
    <group ref={ref}>
      <Model />
    </group>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0run0sc",
        "template_lpj6dcb",
        formRef.current,
        "OyEtgvFhagNjh2D6g"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (err) => {
          setLoading(false);
          console.error(err);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-background md:pt-42 overflow-x-hidden relative"
    >
      <div className="container mx-auto max-w-6xl mb-22">
        <div className="mt-22 md:mt-0 md:mb-22 text-center">
          <p className="uppercase tracking-widest text-opposite-400 text-sm">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
            Let’s Build{" "}
            <span className="text-transparent gradient-text">Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card flex items-center justify-center rounded-xl shadow-md p-4">
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
              className="w-full h-[350px] md:h-[500px] lg:h-[600px]"
            >
              <ambientLight intensity={0.8} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={1.2}
                castShadow
              />
              <spotLight
                position={[-5, 10, 5]}
                angle={0.3}
                intensity={0.8}
                penumbra={0.5}
                castShadow
              />

              <RotatingModel />
            </Canvas>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden
                  focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden
                  focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none
                  focus:ring-2 focus:ring-primary"
                  placeholder="Hello! I would like to talk about ..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg cursor-pointer font-medium transition-all duration-300",
                  "bg-opposite text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg active:scale-95",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {sent && (
                <p className="text-green-600 text-sm font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
