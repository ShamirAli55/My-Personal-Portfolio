import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils.js";
import { navItems } from "../constants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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


  const socials = navItems.filter((item) => item.category === "Social");

  return (
    <section id="contact" className="min-h-screen w-full py-20 bg-background md:pt-42">
      <div className="container mx-auto max-w-6xl">
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
          {/* Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:abc@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+123444834"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 23444834
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">ABC City, England</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-card shadow hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
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
                  "cosmic-button w-full flex justify-center items-center gap-2",
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
    </section>
  );
};

export default Contact;
