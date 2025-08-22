import { Home, User, Code, Folder, Mail, BookOpen, Github, Linkedin, Twitter } from "lucide-react";

export const navItems = [

  { name: "Home", href: "home", icon: Home, category: "Navigation" },
  { name: "About", href: "about", icon: User, category: "Navigation" },
  { name: "Skills", href: "skills", icon: Code, category: "Navigation" },
  { name: "Projects", href: "projects", icon: Folder, category: "Navigation" },
  { name: "Contact", href: "contact", icon: Mail, category: "Navigation" },

  
  { name: "Blog", href: "blog", icon: BookOpen, category: "Resources" },


  { name: "GitHub", href: "https://github.com/ShamirAli55", icon: Github, category: "Social" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin, category: "Social" },
  { name: "Twitter", href: "https://twitter.com/yourprofile", icon: Twitter, category: "Social" },
];
