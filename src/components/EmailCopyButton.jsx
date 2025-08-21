import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Copy, CopyCheck } from "lucide-react";
const EmailCopyButton = () => {
  const CopyRef = useRef(null);
  const NotifyRef = useRef(null);
  const [Copied, setIsCopied] = useState(false);
  const email = "shamirali9779@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3500);
  };

  useEffect(() => {
    if (Copied && CopyRef.current) {
      gsap
        .timeline()
        .to(CopyRef.current, {
          y: -10,
          x: 2,
          rotate: 10,
          opacity: 0.7,
        })
        .from(
          NotifyRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.2,
          },
          "<"
        )
        .to(NotifyRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(
          CopyRef.current,
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );
    }
  }, [Copied]);

  return (
    <button
      onClick={copyToClipboard}
      className="p-3 md:px-6 md:py-3 rounded-full font-semibold transition-all flex items-center whitespace-nowrap
        duration-300  shadow-[0_8px_32px_rgba(0,0,0,0.25)] active:scale-95 cursor-pointer text-opposite hover:bg-primary hover:text-primary-foreground origin-bottom-right bg-white/10 backdrop-blur-md border border-primary-foreground/20"
    >
      Copy Email Address
      <span className="ml-2 relative">
        {Copied ? (
          <>
            <CopyCheck ref={CopyRef} className="h-6 w-6 object-cover" />
            <div
              className="absolute top-10 -right-5 md:-top-2 md:-right-60 text-sm pointer-events-none whitespace-nowrap rounded-lg px-4 py-2 text-green-500"
              ref={NotifyRef}
            >
              <p>Email Copied Successfully !</p>
            </div>
          </>
        ) : (
          <Copy className="h-6 w-6 object-cover" />
        )}
      </span>
    </button>
  );
};

export default EmailCopyButton;
