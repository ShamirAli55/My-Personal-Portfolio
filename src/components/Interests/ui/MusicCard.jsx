import { Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react";

const MusicCard = () => {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        boxShadow: `0 8px 24px var(--card-shadow)`,
        border: `1px solid var(--card-border)`,
      }}
      className="h-full w-full p-6 rounded-2xl backdrop-blur-xl mx-auto flex flex-col items-center transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="w-full h-full rounded-lg border-1 border-card-border flex items-center justify-center text-opposite text-sm overflow-hidden">
        <img
          className="h-[100px] w-full object-cover"
          src="https://cdn.kwork.com/files/portfolio/t3/69/5e51671877065b2f0c70f6e5a1ebac4060806783-1707145382.jpg"
          alt="Album Cover"
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-6">
        <Shuffle size={20} className="text-opposite" />
        <SkipBack size={24} className="text-opposite" />
        <button className="bg-opposite rounded-full p-3 text-background hover:scale-110 transition">
          <Play size={22} />
        </button>
        <SkipForward size={24} className="text-opposite" />
        <Repeat size={20} className="text-opposite" />
      </div>

      <div className="w-full mt-4">
        <div className="flex justify-between text-xs text-opposite/40 mb-1">
          <span>0:42</span>
          <span>3:17</span>
        </div>
        <div className="w-full h-1 bg-zinc-700 rounded-full relative">
          <div className="absolute left-0 top-0 h-1 bg-indigo-400 rounded-full w-1/5 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
