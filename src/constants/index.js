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
  CircleUserRound,
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
  { name: "Bio", href: "/bio", icon: CircleUserRound, category: "Personal" },

  { name: "Blog", href: "/error", icon: BookOpen, category: "Resources" },

  {
    name: "GitHub",
    href: "https://github.com/ShamirAli55",
    icon: Github,
    category: "Social",
  },
  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/shamirali55",
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
  {
    name: "React.js",
    image: "/skills/react.png",
  },
  {
    name: "Next.js",
    image: "/skills/nextjs.svg",
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.svg",
  },
  {
    name: "Node.js",
    image: "/skills/nodejs.svg",
  },
  {
    name: "Express.js",
    image: "/skills/express.svg",
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.svg",
  },
  // Animations & UI
  {
    name: "Tailwind CSS",
    image: "/skills/tailwindcss.png",
  },
  {
    name: "Shadcn",
    image: "/skills/shadcn.png",
  },
  {
    name: "Framer Motion",
    image: "/skills/framer-motion.png",
  },
  {
    name: "GSAP",
    image: "/skills/gsap.png",
  },
  { name: "Swiper.js", image: "/skills/swiperjs.svg" },
  {
    name: "Lenis",
    image: "/skills/lenis.png",
  },
  {
    name: "Three.js",
    image: "/skills/threejs.png",
  },

  // DevOps & Hosting
  {
    name: "Docker",
    image: "/skills/docker.svg",
  },
  {
    name: "Linux",
    image: "/skills/linux.svg",
  },
  {
    name: "AWS",
    image: "skills/aws.webp",
  },
  {
    name: "Vercel",
    image: "/skills/vercel.svg",
  },
  {
    name: "npm",
    image: "/skills/npm.png",
  },

  {
    name: "Git",
    image: "/skills/git.svg",
  },
  {
    name: "GitHub",
    image: "/skills/github.svg",
  },
  {
    name: "VS Code",
    image: "/skills/vscode.svg",
  },
  { name: "Sanity", image: "/skills/sanity.svg" },
  {
    name: "Zustand",
    image: "/skills/zustand.svg",
  },
  {
    name: "Expo",
    image: "/skills/expo.svg",
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

export const experiences = [
  {
    title: "Student Developer",
    job: "Capital University of Science & Technology (CUST)",
    date: "2021 - Present",
    contents: [
      "Pursuing a Bachelor's degree in Software Engineering with a focus on web development, operating systems, and AI tools.",
      "Gained hands-on experience through academic projects in C++, JavaScript, React, and database management.",
      "Collaborated with classmates on team projects, applying Agile methodology and version control (Git/GitHub).",
    ],
  },
  {
    title: "Personal & Academic Projects",
    job: "Independent Work",
    date: "2022 - Present",
    contents: [
      "Built multiple frontend clones and small full-stack applications to strengthen problem-solving and design skills.",
      "Developed a train reservation system in C++ with features like booking, deletion, and admin panel.",
      "Worked on a pet store system including e-commerce features, vet appointments, and chatbot integration.",
      "Explored AI/ML by creating simple models using HuggingFace Transformers for Q&A tasks.",
    ],
  },
  {
    title: "Freelance / Portfolio Developer",
    job: "Self-Employed",
    date: "2024 - Present",
    contents: [
      "Created a personal portfolio using React, Vite, TailwindCSS, and Framer Motion to showcase skills.",
      "Experimented with Three.js for interactive 3D web experiences.",
      "Continuously learning and improving skills in MERN stack, backend systems, and deployment strategies.",
    ],
  },
];
