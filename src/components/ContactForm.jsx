import { useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactFormDrawer = ({ onClose }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0run0sc",
      "template_lpj6dcb",
      formRef.current,
      "OyEtgvFhagNjh2D6g"
    );
  };

  return (
    <>
  
      <div
        className="fixed inset-0 bg-red-400 backdrop-blur-sm z-90"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 rounded-t-2xl shadow-xl max-h-[50vh] animate-slideUp overflow-hidden">
        {/* Drag Handle */}
        <div className="flex justify-center py-2">
          <div className="w-12 h-1.5 bg-gray-500 rounded-full cursor-pointer" />
        </div>

        {/* Form */}
        <div className="p-6 overflow-y-auto h-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 text-left"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormDrawer;
