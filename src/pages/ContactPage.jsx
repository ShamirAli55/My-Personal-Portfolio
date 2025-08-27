import { Send } from "lucide-react";
import { cn } from "../lib/utils.js";
import { navItems } from "../constants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
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
      className="min-h-screen w-full  bg-background md:pt-42"
    >
      <div className="container mx-auto max-w-6xl mb-22">
        <div className="mb-22 text-center">
          <p className="uppercase tracking-widest text-opposite-400 text-sm">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
            Fuel for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Innovation
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-red-200"></div>

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
                  "w-full flex justify-center items-center gap-2",
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
