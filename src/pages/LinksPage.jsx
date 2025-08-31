import { socialLinks } from "../constants";
import OverLay from "../components/OverLay";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const LinksPage = () => {
  const email = "shamirali9779@gmail.com";
  const phone = "+92 0317 5266003";

  const socials = socialLinks.filter((link) => link.name !== "WhatsApp");

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.7 } },
  };

  return (
    <div className="min-h-screen bg-background text-primary py-20 flex flex-col items-center relative z-1">
      <OverLay src={"/assets/images/GradientLiquid.jpg"} ShowCurves={false} />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold mb-12 pt-6 text-center gradient-text"
      >
        Shamir Ali
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col w-full max-w-md space-y-4 px-5"
      >
        <motion.a
          variants={item}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${email}`}
          className="container flex items-center gap-4 w-full max-w-md p-4 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20
                     shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                     transition-all duration-300"
        >
          <Mail className="w-6 h-6" color="hsl(var(--opposite))" />
          <span className="text-lg font-semibold">{email}</span>
        </motion.a>

        <motion.a
          variants={item}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="container flex items-center gap-4 w-full max-w-md p-4 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20
                     shadow-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500
                     transition-all duration-300"
        >
          <Phone className="w-6 h-6" color="hsl(var(--opposite))" />
          <span className="text-lg font-semibold">{phone}</span>
        </motion.a>

        {socials.map((social, index) => (
          <motion.a
            key={index}
            variants={item}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                       transition-all duration-300"
          >
            <social.icon className="w-6 h-6" />
            <span className="text-lg font-medium">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default LinksPage;
