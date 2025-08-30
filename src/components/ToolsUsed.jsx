import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { tools } from "../constants";
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring", stiffness: 80 },
  }),
};

const ToolsUsed = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        ⚡ Tools I Work With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <Tooltip key={tool.name} content={tool.description}>
            <motion.div
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
    flex flex-col items-center gap-3 p-5 rounded-xl 
    bg-card/50 
    border border-transparent 
    [background-clip:padding-box,border-box] 
    bg-gradient-to-r from-transparent via-transparent to-transparent
    hover:from-purple-500/40 hover:to-cyan-500/40
    hover:border-gradient-to-r hover:from-purple-500 hover:to-cyan-500
    transition-all duration-300 cursor-pointer w-36 sm:w-40 md:w-44
  "
            >
              <tool.icon className={tool.iconClass} />
              <span className="text-sm font-medium text-center">
                {tool.name}
              </span>
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default ToolsUsed;
