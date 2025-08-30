import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Gamepad2,
  Music2,
  Sparkles as SparklesIcon,
  Heart,
  ThumbsDown,
  Flame,
  Star,
  Headphones,
  Play,
  Gauge,
} from "lucide-react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// -------------------- Sample Data --------------------
const gamePrefs = [
  { metric: "Action", score: 92 },
  { metric: "RPG", score: 88 },
  { metric: "Shooter", score: 84 },
  { metric: "Open-World", score: 95 },
  { metric: "Indie", score: 70 },
  { metric: "Strategy", score: 64 },
];

const favoriteGames = [
  {
    title: "Elden Ring",
    platform: "PC/PS",
    hours: 240,
    genre: ["Action", "RPG", "Open-World"],
    cover: "https://plus.unsplash.com/premium_photo-1667275280442-e68607f8e86b?q=80&w=1332&auto=format&fit=crop",
    note: "Exploration + build freedom",
    rating: 5,
  },
  {
    title: "The Witcher 3",
    platform: "PC",
    hours: 180,
    genre: ["RPG", "Story", "Open-World"],
    cover: "/assets/games/witcher3.jpg",
    note: "Narrative + quests",
    rating: 5,
  },
  {
    title: "Valorant",
    platform: "PC",
    hours: 600,
    genre: ["Shooter", "Competitive"],
    cover: "/assets/games/valorant.jpg",
    note: "Aim training + teamplay",
    rating: 4,
  },
  {
    title: "Minecraft",
    platform: "PC",
    hours: 350,
    genre: ["Sandbox", "Creative"],
    cover: "/assets/games/minecraft.jpg",
    note: "Chill + building",
    rating: 4,
  },
];

const playlists = [
  {
    title: "Focus • Lofi Coding",
    platform: "Spotify",
    art: "/assets/playlists/lofi.jpg",
    url: "https://open.spotify.com/",
    mood: ["lofi", "calm"],
    tracks: 132,
  },
  {
    title: "Gym • Hype Mix",
    platform: "Spotify",
    art: "/assets/playlists/gym.jpg",
    url: "https://open.spotify.com/",
    mood: ["energy", "pump"],
    tracks: 98,
  },
  {
    title: "Deep House Nights",
    platform: "YouTube",
    art: "/assets/playlists/deep.jpg",
    url: "https://youtube.com/",
    mood: ["groove", "late"],
    tracks: 76,
  },
];

const likes = [
  "Clean UI aesthetics",
  "Learning new frameworks",
  "Open-source projects",
  "Cats & dogs",
  "Cinematic game soundtracks",
  "Night coding + coffee",
];

const dislikes = [
  "Unnecessary meetings",
  "Lag spikes",
  "Over-engineering simple features",
  "Messy commit history",
];

// -------------------- Utilities --------------------
const NeonText = ({ children, className = "" }) => (
  <span className={`relative inline-block [text-shadow:_0_0_30px_currentColor] ${className}`}>{children}</span>
);

const TiltCard = ({ children, className = "", intensity = 8 }) => {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sy = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((py - 0.5) * -intensity);
    ry.set((px - 0.5) * intensity);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

const SparkleBG = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-gradient-to-tr from-rose-500/20 to-indigo-500/20"
      animate={{ x: [0, 40, -20, 0], y: [0, 20, -30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20"
      animate={{ x: [0, -30, 10, 0], y: [0, -25, 35, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// -------------------- Main Component --------------------
function InterestsPage () {
  const hoursByGame = useMemo(() => favoriteGames.map((g) => ({ name: g.title, hours: g.hours })), []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden">
      <SparkleBG />

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4 text-rose-400" />
          <span>Curated passions • Max animations</span>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <NeonText className="text-rose-400">Interests</NeonText>
          <span className="mx-2 text-zinc-400">–</span>
          <span className="text-zinc-300">Games · Music · Likes</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
          A living snapshot of what fuels my focus and downtime. All sections below with tilt + motion.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 relative z-10 space-y-20">
        
        {/* GAMES */}
        <motion.div className="space-y-10">
          <h3 className="text-2xl font-bold flex items-center gap-2"><Gamepad2 className="text-rose-400" /> Games</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favoriteGames.map((g, idx) => (
              <TiltCard key={g.title}>
                <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 overflow-hidden">
                  <div className="relative h-36">
                    <img src={g.cover} alt={g.title} className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 bg-rose-600/90 px-2 py-0.5 text-xs text-white rounded">
                      <Flame className="h-3 w-3 inline" /> {g.hours}h
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{g.title}</h4>
                    <p className="text-xs text-zinc-400">{g.platform}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < g.rating ? "text-yellow-400" : "text-zinc-600"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
                <Gauge className="h-5 w-5 text-rose-400" /> Genre Affinity
              </h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={gamePrefs}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar dataKey="score" stroke="#fb7185" fill="#fb7185" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
                <Gamepad2 className="h-5 w-5 text-rose-400" /> Hours Played
              </h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hoursByGame}>
                    <XAxis dataKey="name" tick={{ fill: "#e5e7eb", fontSize: 12 }} interval={0} angle={-15} textAnchor="end" height={50} />
                    <YAxis tick={{ fill: "#e5e7eb" }} />
                    <Tooltip wrapperStyle={{ background: "#0f172a", borderRadius: 8 }} />
                    <Bar dataKey="hours" fill="#fb7185" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PLAYLISTS */}
        <motion.div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2"><Music2 className="text-rose-400" /> Playlists</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map((p) => (
              <TiltCard key={p.title}>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
                  <div className="relative h-44">
                    <img src={p.art} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-xs text-zinc-400">{p.tracks} tracks • {p.platform}</p>
                    <a href={p.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 bg-rose-500 px-3 py-1 rounded text-sm">
                      <Play className="h-4 w-4" /> Listen
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* LIKES */}
        <motion.div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2"><Heart className="text-rose-400" /> Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {likes.map((l) => (
              <TiltCard key={l}>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 flex items-center gap-3">
                  <Heart className="h-5 w-5 text-rose-400" />
                  <span>{l}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* DISLIKES */}
        <motion.div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2"><ThumbsDown className="text-zinc-400" /> Dislikes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dislikes.map((d) => (
              <TiltCard key={d}>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 flex items-center gap-3">
                  <ThumbsDown className="h-5 w-5 text-zinc-400" />
                  <span>{d}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default InterestsPage;
