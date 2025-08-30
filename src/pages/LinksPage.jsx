import { socialLinks } from "../constants";
import OverLay from "../components/OverLay";
import { Mail, Phone } from "lucide-react";

const LinksPage = () => {
  const email = "shamirali9779@gmail.com";
  const phone = "+92 0317 5266003";

  const socials = socialLinks.filter((link) => link.name !== "WhatsApp");

  return (
    <div className="min-h-screen bg-background text-primary py-20 flex flex-col items-center relative z-1">
      <OverLay src={"/assets/GradientLiquid.jpg"} ShowCurves={false} />
      <h1 className="text-4xl font-bold mb-12 pt-6 text-center gradient-text">
        Shamir Ali
      </h1>

      <div className="flex flex-col w-full max-w-md space-y-4 px-5">
        <a
          href={`mailto:${email}`}
          className="container flex items-center gap-4 w-full max-w-md p-4 rounded-2xl 
                   bg-white/10 backdrop-blur-md border border-white/20
                   shadow-lg hover:scale-105 
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all duration-300"
        >
          <Mail className="w-6 h-6" color="hsl(var(--opposite))" />
          <span className="text-lg font-semibold">{email}</span>
        </a>

        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="container flex items-center gap-4 w-full max-w-md p-4 rounded-2xl 
                   bg-white/10 backdrop-blur-md border border-white/20
                   shadow-lg hover:scale-105 
                   hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500
                   transition-all duration-300"
        >
          <Phone className="w-6 h-6" color="hsl(var(--opposite))" />
          <span className="text-lg font-semibold">{phone}</span>
        </a>

        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       shadow-lg hover:scale-105 
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                       transition-all duration-300"
          >
            <social.icon className="w-6 h-6" />
            <span className="text-lg font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
