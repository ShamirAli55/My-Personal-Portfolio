import {
  Home,
  User,
  Code,
  Mail,
  Folder,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  BookHeart,
  Link2,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "/", icon: Home, category: "Navigation" },
  { name: "About", href: "/about", icon: User, category: "Navigation" },
  { name: "Work", href: "/projects", icon: Code, category: "Navigation" },
  { name: "Contact", href: "/contact", icon: Mail, category: "Navigation" },

  { name: "Experience", href: "/experience", icon: User, category: "Personal" },
  { name: "Resume", href: "/resume", icon: Folder, category: "Personal" },
  { name: "Links", href: "/links", icon: Link2, category: "Personal" },
  { name: "Info", href: "/info", icon: BookHeart, category: "Personal" },

  { name: "Blog", href: "/error", icon: BookOpen, category: "Resources" },

  {
    name: "GitHub",
    href: "https://github.com/ShamirAli55",
    icon: Github,
    category: "Social",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
    category: "Social",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourprofile",
    icon: Twitter,
    category: "Social",
  },
];

export const skills = [
  // Core Stack
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  // Animations & UI
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Framer Motion",
    image:
      "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
  },
  {
    name: "GSAP",
    image:
      "https://greensock.com/uploads/monthly_2020_05/gsap-logo.png.7c0c2d5a36.png",
  },
  { name: "Swiper.js", image: "https://swiperjs.com/images/swiper-logo.svg" },
  {
    name: "Lenis",
    image: "https://avatars.githubusercontent.com/u/99412718?s=200&v=4",
  },
  {
    name: "Three.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },

  // DevOps & Hosting
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Linux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Vercel",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
  },
  {
    name: "pnpm",
    image:
      "https://seeklogo.com/images/P/pnpm-logo-402F407EE0-seeklogo.com.png",
  },

  // Tools & Extras
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  { name: "Sanity", image: "https://cdn.worldvectorlogo.com/logos/sanity.svg" },
  {
    name: "Zustand",
    image:
      "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/logo.svg",
  },
  {
    name: "Expo",
    image:
      "https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from  websites, allowing customers to shop from these sites.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];
