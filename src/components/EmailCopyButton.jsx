import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Copy, CopyCheck } from "lucide-react";

const EmailCopyButton = () => {
  const CopyRef = useRef(null);
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
        .to(CopyRef.current, {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
    }
  }, [Copied]);

  return (
    <button
      onClick={copyToClipboard}
      className="p-3 md:px-6 md:py-3 rounded-full font-semibold transition-all flex items-center whitespace-nowrap
        duration-300 text-sm shadow-[0_8px_32px_hsl(var(--opposite)/0.2)] active:scale-95 cursor-pointer text-opposite hover:bg-primary hover:text-primary-foreground origin-bottom-right bg-white/10 backdrop-blur-md border border-primary-foreground/20"
    >
      <div className="relative">
        <p className={Copied ? "invisible absolute" : "visible"}>
          Copy Email Address
        </p>
        <p
          className={
            Copied ? "visible text-sm text-green-500" : "invisible absolute"
          }
        >
          Email Address Copied!
        </p>
      </div>

      <span className="ml-2 relative" ref={CopyRef}>
        {Copied ? (
          <CopyCheck className="h-6 w-6 object-cover" />
        ) : (
          <Copy className="h-6 w-6 object-cover" />
        )}
      </span>
    </button>
  );
};

export default EmailCopyButton;
