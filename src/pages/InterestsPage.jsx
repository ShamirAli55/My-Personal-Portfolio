import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Gamepad2,
  Music2,
  Sparkles as SparklesIcon,
  Flame,
  Star,
  Headphones,
  Play,
  Gauge,
  Clock,
  Activity,
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
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

// -------------------- Sample Data --------------------
const favoriteGames = [
  { title: "Elden Ring", hours: 240, rating: 5 },
  { title: "The Witcher 3", hours: 180, rating: 5 },
  { title: "Valorant", hours: 600, rating: 4 },
  { title: "Minecraft", hours: 350, rating: 4 },
];

const gamePrefs = [
  { metric: "Action", score: 92 },
  { metric: "RPG", score: 88 },
  { metric: "Shooter", score: 84 },
  { metric: "Open-World", score: 95 },
  { metric: "Indie", score: 70 },
  { metric: "Strategy", score: 64 },
];

const musicHabits = [
  { genre: "Lofi", hours: 120 },
  { genre: "EDM", hours: 95 },
  { genre: "Hip-Hop", hours: 80 },
  { genre: "Game OST", hours: 140 },
  { genre: "Acoustic", hours: 60 },
];

const codingTime = [
  { hour: "Morning", focus: 40 },
  { hour: "Afternoon", focus: 65 },
  { hour: "Evening", focus: 85 },
  { hour: "Late Night", focus: 95 },
];

const lifestyleBalance = [
  { area: "Gaming", value: 30 },
  { area: "Coding", value: 35 },
  { area: "Music", value: 20 },
  { area: "Fitness", value: 10 },
  { area: "Social", value: 15 },
];

// -------------------- Helpers --------------------
const NeonText = ({ children, className = "" }) => (
  <span
    className={`relative inline-block [text-shadow:_0_0_30px_currentColor] ${className}`}
  >
    {children}
  </span>
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

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

// -------------------- Main Component --------------------
export default function InterestsPage() {
  const hoursByGame = useMemo(
    () => favoriteGames.map((g) => ({ name: g.title, hours: g.hours })),
    []
  );

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden">
      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4 text-rose-400" />
          <span>Curated passions • Balanced lifestyle</span>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <NeonText className="text-rose-400">Interests</NeonText>
          <span className="mx-2 text-zinc-400">–</span>
          <span className="text-zinc-300">Games · Music · Coding · Balance</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
          A snapshot of passions that fuel focus, fun, and growth. Not just a
          gamer, not just a coder — but a bit of both, balanced.
        </p>
      </div>

      {/* Charts Grid */}
      <div className="mx-auto mt-14 grid gap-8 max-w-6xl px-6 md:grid-cols-2">
        {/* Games */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
              <Gamepad2 className="h-5 w-5 text-rose-400" /> Hours in Games
            </h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hoursByGame}>
                  <XAxis dataKey="name" tick={{ fill: "#e5e7eb" }} />
                  <YAxis tick={{ fill: "#e5e7eb" }} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#fb7185" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* Game Preferences */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
              <Gauge className="h-5 w-5 text-rose-400" /> Game Genre Affinity
            </h4>
            <div className="h-72">
              <ResponsiveContainer>
                <RadarChart data={gamePrefs}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    dataKey="score"
                    stroke="#fb7185"
                    fill="#fb7185"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* Music */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
              <Music2 className="h-5 w-5 text-rose-400" /> Music Listening Hours
            </h4>
            <div className="h-72">
              <ResponsiveContainer>
                <BarChart data={musicHabits}>
                  <XAxis dataKey="genre" tick={{ fill: "#e5e7eb" }} />
                  <YAxis tick={{ fill: "#e5e7eb" }} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* Coding Focus Time */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
              <Clock className="h-5 w-5 text-rose-400" /> Coding Focus by Time
            </h4>
            <div className="h-72">
              <ResponsiveContainer>
                <LineChart data={codingTime}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="hour" tick={{ fill: "#e5e7eb" }} />
                  <YAxis tick={{ fill: "#e5e7eb" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="focus"
                    stroke="#fb7185"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* Lifestyle Balance */}
        <TiltCard className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
              <Activity className="h-5 w-5 text-rose-400" /> Lifestyle Balance
            </h4>
            <div className="h-80">
              <ResponsiveContainer>
                <RadarChart data={lifestyleBalance}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="area" />
                  <PolarRadiusAxis angle={30} domain={[0, 40]} />
                  <Radar
                    dataKey="value"
                    stroke="#34d399"
                    fill="#34d399"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
