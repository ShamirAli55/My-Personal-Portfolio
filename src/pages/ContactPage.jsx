import { Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants";
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

  const filteredLinks = socialLinks.filter((link) => link.name !== "WhatsApp");
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-background text-primary flex items-center justify-center py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center py-12">
          <p className="uppercase tracking-widest text-opposite-400 text-sm">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
            Let’s Build{" "}
            <span className="text-transparent gradient-text">Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 px-6 md">
          <div className="bg-card p-8 rounded-xl shadow-md border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Say Hello <span className="hey">👋</span>
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Feel free to reach out via the form below
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject of your message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What I can help you with?"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-opposite text-primary-foreground cursor-pointer py-3 rounded-md hover:opacity-80 transition"
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                <Send size={18} color="hsl(var(--opposite))" />
              </button>

              {sent && (
                <p className="text-green-500 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          <div className="flex flex-col items-center md:items-start justify-between">
            <div className="text-center md:text-left w-full">
              <h3 className="text-2xl font-bold mb-6">Let’s Connect 🤝</h3>
              <p className="text-sm text-gray-400 mb-8">
                You can also find me on:
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
                {filteredLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-4 bg-card rounded-full hover:bg-primary/20 transition flex items-center justify-center"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="https://wa.me/03175266003"
                  target="_blank"
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
