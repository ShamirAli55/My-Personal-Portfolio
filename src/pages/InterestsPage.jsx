import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Star,
  Headphones,
  Code2,
  Cpu,
  Monitor,
  HardDrive,
  Clapperboard,
} from "lucide-react";
import TiltCard from "../components/Interests/ui/TiltCard";
import CanvasCard from "../components/Interests/effects/CanvasCard";
import CodingFocusChart from "../components/Interests/charts/CodingFocusChart";
import GamePrefsChart from "../components/Interests/charts/GamePrefsChart";
import LifestyleBalanceChart from "../components/Interests/charts/LifestyleBalanceChart";
import { animeList, favoriteGames, codingRhythm } from "../constants";
import Cursor from "../components/Interests/effects/Cursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonText from "../components/Interests/ui/NeonText";
gsap.registerPlugin(ScrollTrigger);

const GameCarousel = ({ games }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % games.length), 5000);
    return () => clearInterval(id);
  }, [games.length]);

  return (
    <div className="relative h-72 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={games[index].title}
          className="absolute w-full h-full flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={games[index].cover}
            alt={games[index].title}
            className="rounded-lg shadow-lg border border-zinc-700 mb-4 h-40 w-full object-cover aspect-auto"
          />
          <p className="text-lg font-bold text-rose-400">
            {games[index].title}
          </p>
          <p className="text-zinc-400 text-sm">
            {games[index].hours} Hours • {"⭐".repeat(games[index].rating)}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const PlayingBars = () => {
  const bars = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className="flex items-end justify-center gap-1 h-10">
      {bars.map((b) => (
        <motion.div
          key={b}
          className="w-1 rounded-full bg-green-400/90"
          initial={{ height: 4 }}
          animate={{ height: [8, 28, 14, 36, 12, 22, 10] }}
          transition={{
            repeat: Infinity,
            duration: 1 + (b % 5) * 0.12,
            delay: (b % 7) * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const AnimeScroller = () => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = wrapRef.current;
      const track = trackRef.current;

      const update = () => {
        const scrollWidth = track.scrollWidth;
        const viewport = el.clientWidth;
        const distance = Math.max(0, scrollWidth - viewport);

        gsap.to(track, {
          x: () => -distance,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 3,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      update();
      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      ro.observe(el);
      return () => {
        ro.disconnect();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative w-full overflow-hidden my-20"
      aria-label="Anime & Movies"
    >
      <div className="mb-6 flex items-center gap-2 px-2 md:px-6">
        <Clapperboard className="h-5 w-5 text-violet-400" />
        <h3 className="text-xl md:text-2xl font-semibold text-zinc-100">
          Anime & Movies I’m into
        </h3>
      </div>

      <div
        ref={trackRef}
        className="anime-track flex gap-4 md:gap-6 px-2 md:px-6 will-change-transform"
      >
        {animeList.map((item) => (
          <div
            key={item.title}
            className="anime-card min-w-[240px] md:min-w-[320px] rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-zinc-900/60 to-fuchsia-400/10 backdrop-blur-xl shadow-[0_0_24px_rgba(168,85,247,0.15)] overflow-hidden"
          >
            <div className="h-44 md:h-56 w-full overflow-hidden">
              <img
                src={item.poster}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-zinc-100 font-semibold">{item.title}</p>
              <p className="text-zinc-400 text-sm">{item.meta}</p>

              <div className="mt-3 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-violet-400"
                  style={{ width: `${60 + Math.floor(Math.random() * 30)}%` }}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="min-w-[10vw]" />
      </div>
    </section>
  );
};

export default function StatsSection() {
  return (
    <section className="container mx-auto py-20 px-6 md:px-12 lg:px-24">
      <Cursor />
      <NeonText className="text-red-300">
        Interests Beyond the Screen: My Flow
      </NeonText>
      <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
        Coding, gaming, and music are my rhythm — here’s a peek into the vibes
        that keep me going 🎧🔥
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="bg-zinc-800 p-6 rounded-xl shadow">
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
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <CodingFocusChart />
        </div>

        {/* Row 2 */}

        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <TiltCard>
            <div className="rounded-2xl border border-background/50 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 relative overflow-hidden">
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-zinc-200">
                <Star className="h-5 w-5 text-rose-400" /> Favorite Games
              </h4>
              <GameCarousel games={favoriteGames} />
            </div>
          </TiltCard>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <GamePrefsChart />
        </div>

        {/* Row 3 */}

        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <TiltCard>
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 via-zinc-900/60 to-green-400/5 backdrop-blur-xl border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Headphones className="text-green-400" /> Music Stats
              </h2>

              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-lg font-semibold text-green-400 tracking-wide">
                  Spotify •{" "}
                  <span className="text-white">1200+ hrs this year</span>
                </p>

                <div className="w-full bg-zinc-800 rounded-full h-2 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-green-400"
                    initial={{ width: "10%" }}
                    animate={{ width: ["10%", "35%", "55%", "80%", "90%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <p className="text-xs text-zinc-400">Lo-Fi / OSTs on repeat</p>

                <PlayingBars />
              </div>
            </motion.div>
          </TiltCard>
        </div>

        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <CanvasCard />
        </div>

        {/* Row 4 */}

        <div className="bg-zinc-800 p-6 rounded-xl shadow">
          <LifestyleBalanceChart />
        </div>
      </div>

      <AnimeScroller />
    </section>
  );
}
