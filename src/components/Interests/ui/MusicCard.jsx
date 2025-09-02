import { Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const PlayingBars = () => {
  const [barCount, setBarCount] = useState(40);

  useEffect(() => {
    const updateBars = () => {
      if (window.innerWidth < 640) 
      {
        setBarCount(20);
      } else {
        setBarCount(40);
      }
    };

    updateBars();
    window.addEventListener("resize", updateBars);
    return () => window.removeEventListener("resize", updateBars);
  }, []);

  const bars = Array.from({ length: barCount }, (_, i) => i);
  return (
    <div className="flex items-end justify-center gap-1 h-10">
      {bars.map((b) => (
        <motion.div
          key={b}
          className="w-1 rounded-full bg-indigo-400"
          initial={{ height: 4 }}
          animate={{ height: [8, 28, 14, 16, 12, 18, 10] }}
          transition={{
            repeat: Infinity,
            duration: 4 + (b % 5) * 0.5,
            delay: (b % 7) * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const MusicCard = () => {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        boxShadow: `0 8px 24px var(--card-shadow)`,
        border: `1px solid var(--card-border)`,
      }}
      className="h-full w-full p-6 pt-0 rounded-2xl backdrop-blur-xl mx-auto flex flex-col items-center transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="w-full h-full rounded-lg border-1 border-card-border flex items-center justify-center text-opposite text-sm overflow-hidden">
        <img
          className="h-[150px] w-full object-cover"
          src="/assets/images/album-cover.jpg"
          alt="Album Cover"
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-3">
        <Shuffle size={18} className="text-opposite" />
        <SkipBack size={20} className="text-opposite" />
        <button className="bg-opposite rounded-full p-3 text-background hover:scale-110 transition">
          <Play size={21} />
        </button>
        <SkipForward size={20} className="text-opposite" />
        <Repeat size={18} className="text-opposite" />
      </div>

      <div className="w-full mt-2">
        <div className="flex justify-between text-xs text-opposite/40">
          <span>0:42</span>
          <span>3:17</span>
        </div>
        <div className="w-full h-1 bg-zinc-700 rounded-full relative">
          <PlayingBars/>
          <div className="absolute left-0 top-0 h-1 bg-indigo-400 rounded-full w-1/5 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
