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
  BriefcaseBusiness,
  Star,
  FileText,
  FolderOpen,
  Link2,
  Facebook,
  MessageCircle,
  Send,
  TerminalSquare,
  Cloud,
  Globe,
  Layout,
  Database,
  Palette,
  Box,
  Code2,
  Wand2,
  Layers,
  Compass,
  Cpu,
  BrainCircuit,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export const navItems = [
  { name: "Home", href: "/", icon: Home, category: "Navigation" },
  { name: "About", href: "/about", icon: User, category: "Navigation" },
  { name: "Work", href: "/projects", icon: FolderOpen, category: "Navigation" },
  { name: "Contact", href: "/contact", icon: Mail, category: "Navigation" },

  {
    name: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
    category: "Personal",
  },
  { name: "Resume", href: "/resume", icon: FileText, category: "Personal" },
  { name: "Links", href: "/links", icon: Link2, category: "Personal" },
  { name: "Interests", href: "/interests", icon: Star, category: "Personal" },

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
    image: "/assets/skills/react.png",
  },
  {
    name: "Next.js",
    image: "/assets/skills/nextjs.svg",
  },
  {
    name: "TypeScript",
    image: "/assets/skills/typescript.svg",
  },
  {
    name: "Node.js",
    image: "/assets/skills/nodejs.svg",
  },
  {
    name: "Express.js",
    image: "/assets/skills/express.svg",
  },
  {
    name: "MongoDB",
    image: "/assets/skills/mongodb.svg",
  },
  // Animations & UI
  {
    name: "Tailwind CSS",
    image: "/assets/skills/tailwindcss.png",
  },
  {
    name: "Shadcn",
    image: "/assets/skills/shadcn.png",
  },
  {
    name: "Framer Motion",
    image: "/assets/skills/framer-motion.svg",
  },
  {
    name: "GSAP",
    image: "/assets/skills/gsap.svg",
  },
  { name: "Swiper.js", image: "/assets/skills/swiperjs.svg" },
  {
    name: "Lenis",
    image: "/assets/skills/lenis.svg",
  },
  {
    name: "Three.js",
    image: "/assets/skills/threejs.svg",
  },

  // DevOps & Hosting
  {
    name: "Docker",
    image: "/assets/skills/docker.svg",
  },
  {
    name: "Linux",
    image: "/assets/skills/linux.svg",
  },
  {
    name: "AWS",
    image: "/assets/skills/aws.png",
  },
  {
    name: "Vercel",
    image: "/assets/skills/vercel.svg",
  },
  {
    name: "npm",
    image: "/assets/skills/npm.png",
  },

  {
    name: "Git",
    image: "/assets/skills/git.svg",
  },
  {
    name: "GitHub",
    image: "/assets/skills/github.svg",
  },
  {
    name: "VS Code",
    image: "/assets/skills/vscode.svg",
  },
  { name: "Sanity", image: "/assets/skills/sanity.svg" },
  {
    name: "Zustand",
    image: "/assets/skills/zustand.svg",
  },
  {
    name: "Expo",
    image: "/assets/skills/expo.svg",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    description:
      "Facilitates purchases from websites, allowing customers to shop from these sites.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    overview:
      "A full-stack e-commerce solution showcasing secure transactions, product filtering, and responsive UI using ASP.NET Core MVC and Tailwind CSS.",
    features: [
      "User authentication & authorization",
      "Product management dashboard",
      "Shopping cart & checkout system",
      "Integrated payments",
    ],
    demoUrl: "https://your-demo-link.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    gradient: "linear-gradient(135deg, #ff007a, #5900ff)",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication System",
    slug: "authentication-system",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    overview:
      "A robust authentication platform leveraging Auth0 for identity management and React for frontend integration.",
    features: [
      "OAuth and JWT authentication",
      "Multi-factor authentication",
      "Role-based access control",
    ],
    demoUrl: "https://your-demo-link.com/auth-system",
    githubUrl: "https://github.com/yourusername/auth-system",
    gradient: "linear-gradient(135deg, #ff007a, #5900ff)",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    slug: "cpp-game-engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    overview:
      "A custom-built game engine in C++ supporting both 2D and 3D rendering, physics, and scripting.",
    features: [
      "Physics engine with collision detection",
      "2D & 3D rendering support",
      "Custom scripting system",
    ],
    demoUrl: "https://your-demo-link.com/game-engine",
    githubUrl: "https://github.com/yourusername/cpp-game-engine",
    gradient: "linear-gradient(135deg, #ff007a, #5900ff)",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    slug: "wordpress-custom-theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    overview:
      "A modern WordPress theme with Tailwind CSS styling and Vite.js optimizations for SEO and performance.",
    features: [
      "Responsive custom theme",
      "SEO & page speed optimization",
      "Plugin compatibility",
    ],
    demoUrl: "https://your-demo-link.com/wordpress-theme",
    githubUrl: "https://github.com/yourusername/wordpress-theme",
    gradient: "linear-gradient(135deg, #ff007a, #5900ff)",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    slug: "online-learning-platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    overview:
      "An e-learning platform supporting video courses, real-time quizzes, and secure payments with Blazor and Azure.",
    features: [
      "Course enrollment system",
      "Video streaming with Azure",
      "Dynamic quizzes with grading",
      "Stripe-powered payments",
    ],
    demoUrl: "https://your-demo-link.com/elearning",
    githubUrl: "https://github.com/yourusername/elearning-platform",
    gradient: "linear-gradient(135deg, #ff007a, #5900ff)",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
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

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ShamirAli55", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shamirali55",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/yourprofile", icon: Twitter },
  {
    name: "Facebook",
    href: "https://facebook.com/yourprofile",
    icon: Facebook,
  },
  { name: "Discord", href: "https://discord.gg/yourinvite", icon: FaDiscord },
  { name: "Telegram", href: "https://t.me/yourusername", icon: Send },
  { name: "WhatsApp", href: "https://wa.me/1234567890", icon: MessageCircle },
];

export const tools = [
  {
    name: "VS Code",
    description: "Code editor for development",
    icon: Code2,
    iconClass: "w-7 h-7 text-blue-500",
  },
  {
    name: "Cursor AI",
    description: "AI-powered coding assistant",
    icon: BrainCircuit,
    iconClass: "w-7 h-7 text-purple-500",
  },
  {
    name: "PyCharm",
    description: "Python IDE by JetBrains",
    icon: Cpu,
    iconClass: "w-7 h-7 text-green-500",
  },
  {
    name: "Postman",
    description: "API testing platform",
    icon: Globe,
    iconClass: "w-7 h-7 text-orange-500",
  },
  {
    name: "Figma",
    description: "UI/UX design tool",
    icon: Layout,
    iconClass: "w-7 h-7 text-pink-500",
  },
  {
    name: "Blender",
    description: "3D modeling and animation",
    icon: Box,
    iconClass: "w-7 h-7 text-orange-400",
  },
  {
    name: "Kraken.io",
    description: "Image optimization service",
    icon: Wand2,
    iconClass: "w-7 h-7 text-cyan-500",
  },
  {
    name: "WebStorm",
    description: "JavaScript IDE by JetBrains",
    icon: Cpu,
    iconClass: "w-7 h-7 text-sky-500",
  },
  {
    name: "GitHub",
    description: "Version control hosting platform",
    icon: Github,
    iconClass: "w-7 h-7 text-gray-700 dark:text-gray-300",
  },
  {
    name: "MongoDB Compass",
    description: "GUI for MongoDB management",
    icon: Compass,
    iconClass: "w-7 h-7 text-green-600",
  },
  {
    name: "MongoDB Atlas",
    description: "Cloud database service",
    icon: Database,
    iconClass: "w-7 h-7 text-emerald-500",
  },
  {
    name: "Netlify",
    description: "Static site deployment platform",
    icon: Cloud,
    iconClass: "w-7 h-7 text-cyan-400",
  },
  {
    name: "Cloudinary",
    description: "Image and video storage/CDN",
    icon: Cloud,
    iconClass: "w-7 h-7 text-indigo-400",
  },
  {
    name: "Spline",
    description: "3D web design tool",
    icon: Palette,
    iconClass: "w-7 h-7 text-pink-400",
  },
  {
    name: "Brave Browser",
    description: "Privacy-focused web browser",
    icon: Globe,
    iconClass: "w-7 h-7 text-red-500",
  },
  {
    name: "Claude AI",
    description: "AI conversational assistant",
    icon: Wand2,
    iconClass: "w-7 h-7 text-yellow-400",
  },
];
