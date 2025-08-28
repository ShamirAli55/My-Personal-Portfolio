import { motion } from "framer-motion"
import {
  Github,
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
} from "lucide-react"

const tools = [
  { name: "VS Code", icon: <Code2 className="w-7 h-7 text-blue-500" /> },
  { name: "Cursor AI", icon: <BrainCircuit className="w-7 h-7 text-purple-500" /> },
  { name: "PyCharm", icon: <Cpu className="w-7 h-7 text-green-500" /> },
  { name: "Postman", icon: <Globe className="w-7 h-7 text-orange-500" /> },
  { name: "Figma", icon: <Layout className="w-7 h-7 text-pink-500" /> },
  { name: "Blender", icon: <Box className="w-7 h-7 text-orange-400" /> },
  { name: "Kraken.io", icon: <Wand2 className="w-7 h-7 text-cyan-500" /> },
  { name: "WebStorm", icon: <Cpu className="w-7 h-7 text-sky-500" /> },
  { name: "GitHub", icon: <Github className="w-7 h-7 text-gray-700 dark:text-gray-300" /> },
  { name: "MongoDB Compass", icon: <Compass className="w-7 h-7 text-green-600" /> },
  { name: "MongoDB Atlas", icon: <Database className="w-7 h-7 text-emerald-500" /> },
  { name: "Vercel", icon: <Layers className="w-7 h-7 text-black dark:text-white" /> },
  { name: "Netlify", icon: <Cloud className="w-7 h-7 text-cyan-400" /> },
  { name: "Cloudinary", icon: <Cloud className="w-7 h-7 text-indigo-400" /> },
  { name: "Spline", icon: <Palette className="w-7 h-7 text-pink-400" /> },
  { name: "Brave Browser", icon: <Globe className="w-7 h-7 text-red-500" /> },
  { name: "Claude AI", icon: <Wand2 className="w-7 h-7 text-yellow-400" /> },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring", stiffness: 80 },
  }),
}

const ToolsUsed = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        ⚡ Tools I Work With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card/50 
              border border-transparent 
              [background-clip:padding-box,border-box] 
              bg-gradient-to-r from-transparent via-transparent to-transparent
              hover:from-pink-500/30 hover:to-sky-500/30
              hover:border-gradient-to-r hover:from-pink-400 hover:to-sky-400
              transition-all duration-300"
          >
            {tool.icon}
            <span className="text-sm font-medium text-center">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ToolsUsed
