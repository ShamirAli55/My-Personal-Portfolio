import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Gamepad2, Star, Music, Headphones, Code2 } from "lucide-react";
import TiltCard from "../components/TiltCard";

// 📊 Dummy data for coding rhythm
const codingRhythm = [
  { day: "Mon", hours: 5 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 6 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 8 },
  { day: "Sat", hours: 10 },
  { day: "Sun", hours: 3 },
];

const favoriteGames = [
  {
    title: "Elden Ring",
    cover:
      "https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=1170&auto=format&fit=crop",
    hours: 240,
    rating: 5,
  },
  {
    title: "The Witcher 3",
    cover:
      "https://images.unsplash.com/photo-1553227957-454e04fa8472?q=80&w=687&auto=format&fit=crop",
    hours: 180,
    rating: 5,
  },
  {
    title: "Valorant",
    cover:
      "https://plus.unsplash.com/premium_photo-1661917206572-231ec7b88185?q=80&w=1132&auto=format&fit=crop",
    hours: 600,
    rating: 4,
  },
  {
    title: "Minecraft",
    cover:
      "https://plus.unsplash.com/premium_photo-1756224672428-905c9d7c10e7?q=80&w=1170&auto=format&fit=crop",
    hours: 350,
    rating: 4,
  },
];

// 🌀 Text Scramble Effect
const TextScramble = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const handleHover = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay((prev) =>
        text
          .split("")
          .map((letter, i) =>
            i < iterations
              ? text[i]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <h2
      onMouseEnter={handleHover}
      className="text-3xl md:text-4xl font-bold mb-10 text-center text-zinc-100 cursor-pointer"
    >
      {display}
    </h2>
  );
};

export default function StatsSection() {
  return (
    <section className="container mx-auto py-20 px-6 md:px-12 lg:px-24">
      {/* 🌀 Section Title */}
      <TextScramble text="Beyond the Screen: My Flow" />
      <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
        Coding, gaming, and music are my rhythm — here’s a peek into the vibes
        that keep me going 🎧🔥
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 💻 Coding Rhythm */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-zinc-200">
              <Code2 className="h-5 w-5 text-sky-400" /> Coding Rhythm
            </h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={codingRhythm}>
                  <XAxis dataKey="day" tick={{ fill: "#e5e7eb" }} />
                  <YAxis tick={{ fill: "#e5e7eb" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#38bdf8"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "#38bdf8" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* 🎮 Game Carousel */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 relative overflow-hidden">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-zinc-200">
              <Star className="h-5 w-5 text-rose-400" /> Favorite Titles
            </h4>

            <motion.div
              className="relative h-72 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {favoriteGames.map((game, i) => (
                <motion.div
                  key={game.title}
                  className="absolute w-full h-full flex flex-col items-center justify-center text-center px-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 6,
                    delay: i * 6,
                  }}
                >
                  <img
                    src={game.cover}
                    alt={game.title}
                    className="rounded-lg shadow-lg border border-zinc-700 mb-4 h-40 w-full object-cover"
                  />
                  <p className="text-lg font-bold text-rose-400">
                    {game.title}
                  </p>
                  <p className="text-zinc-400 text-sm">
                    {game.hours} Hours • {"⭐".repeat(game.rating)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </TiltCard>

        {/* 🎵 Music Row */}
        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-zinc-200">
              <Music className="h-5 w-5 text-emerald-400" /> Favorite Genre
            </h4>
            <p className="text-zinc-400">Lo-fi / Chill Beats 🎶</p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-zinc-200">
              <Headphones className="h-5 w-5 text-emerald-400" /> Most Played
            </h4>
            <p className="text-zinc-400">Spotify • 1200+ hrs this year</p>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
