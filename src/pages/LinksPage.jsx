import { navItems } from "../constants";
import { Mail } from "lucide-react";

const LinksPage = () => {
  const email = "shamirali9779@gmail.com";

  const links = navItems.filter(
    (item) => item.name.toLowerCase() === "resume" || item.category === "Social"
  );

  return (
    <div className="min-h-screen bg-background text-primary pt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 pt-6 text-center gradient-text">
        Shamir Ali
      </h1>

      <div className="flex flex-col w-full max-w-md space-y-4 px-5">
        <a
          href={`mailto:${email}`}
          className="container flex items-center gap-4 w-full max-w-md p-4 mb-6 rounded-2xl 
                   bg-white/10 backdrop-blur-md border border-white/20
                   shadow-lg hover:scale-105 
                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                   transition-all duration-300"
        >
          <Mail className="w-6 h-6" color="hsl(var(--opposite))" />
          <span className="text-lg font-semibold">{email}</span>
        </a>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       shadow-lg hover:scale-105 
                       hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500
                       transition-all duration-300"
          >
            <link.icon className="w-6 h-6" color="hsl(var(--opposite))" />
            <span className="text-lg font-medium">{link.name}</span>
          </a>
        ))}
      </div>

    </div>
  );
};

export default LinksPage;
