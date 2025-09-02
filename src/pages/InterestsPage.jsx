import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Star, Code2, Clapperboard } from "lucide-react";
import TiltCard from "../components/Interests/ui/TiltCard";
import CanvasCard from "../components/Interests/effects/CanvasCard";
import CodingFocusChart from "../components/Interests/charts/CodingFocusChart";
import GamePrefsChart from "../components/Interests/charts/GamePrefsChart";
import MusicCard from "../components/Interests/ui/MusicCard";
import {
  animeList,
  favoriteGames,
  codingRhythm,
  codingTime,
  gamePrefs,
} from "../constants";
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
            className="rounded-lg shadow-lg border border-opposite/5 mb-4 h-50 w-full object-cover aspect-auto"
          />
          <p className="text-lg font-bold text-rose-400">
            {games[index].title}
          </p>
          <p className="text-opposite/50 text-sm">
            Hours Played • {games[index].hours}
          </p>
          <p>{"⭐".repeat(games[index].rating)}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const PlayingBars = () => {
  const bars = Array.from({ length: 40 }, (_, i) => i);
  return (
    <div className="flex items-end justify-center gap-1 h-10">
      {bars.map((b) => (
        <motion.div
          key={b}
          className="w-1 rounded-full bg-indigo-400"
          initial={{ height: 4 }}
          animate={{ height: [8, 28, 14, 36, 12, 22, 10] }}
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
            start: "top-=120vh top",
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
  const rotations = useMemo(() => {
    return animeList.map((_, idx) => {
      let deg;
      if (idx % 2 === 0) {
        deg = (Math.random() * 6 - 3).toFixed(2);
      } else {
        deg = (Math.random() * 12 - 6).toFixed(2);
      }
      return `rotate(${deg}deg)`;
    });
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative min-h-screen w-full overflow-hidden my-20"
      aria-label="Favourite Animes"
    >
      <div className="mb-6 flex items-center gap-2 px-2 md:px-6">
        <Clapperboard className="h-5 w-5 text-violet-400" />
        <h3 className="text-xl md:text-2xl font-semibold text-opposite">
          Favourite Animes
        </h3>
      </div>

      <div
        ref={trackRef}
        className="anime-track flex gap-4 md:gap-6 px-2 md:px-6 will-change-transform"
      >
        {animeList.map((item, i) => (
          <div
            key={item.title}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--opposite)",
              transform: rotations[i],
            }}
            className="anime-card min-w-[240px] md:min-w-[320px] rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300  hover:scale-[1.03] hover:rotate-0 shadow-[0_8px_24px_hsl(0_0%_0%_/_0.1)]"
          >
            <div className="h-44 md:h-52 w-full aspect-[2/3] overflow-hidden rounded-xl">
              <img
                src={item.poster}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-opposite font-semibold">{item.title}</p>
              <p className="text-opposite/60 text-sm">{item.meta}</p>
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
      <div className="hidden md:block">
      <Cursor />
      </div>
      <NeonText className="text-opposite text-3xl mt-6">
        Interests Beyond the Screen
      </NeonText>
      <p className="text-center text-opposite mb-12 mt-4 max-w-2xl mx-auto w-full md:w-[35%]">
        Coding, gaming, and music are my rhythm here’s a peek into the vibes
        that keep me going 🎧🔥
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
        {/* Row 1 */}
        <div className="bg-opposite/10 md:p-6 rounded-xl shadow ">
          <TiltCard>
            <div
              style={{
                background: "var(--card-bg)",
                boxShadow: `0 8px 24px var(--card-shadow)`,
                border: `1px solid var(--card-border)`,
              }}
              className="rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-opposite">
                <Code2 className="h-5 w-5 text-sky-400" /> Coding Rhythm
              </h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={codingRhythm}>
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "hsl(var(--opposite))" }}
                    />
                    <YAxis tick={{ fill: "hsl(var(--opposite))" }} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card-bg)",
                        border: `1px solid var(--card-border)`,
                        color: "hsl(var(--opposite))",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="hsl(200 90% 70%)"
                      strokeWidth={3}
                      dot={{ r: 6, fill: "hsl(200 90% 70%)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TiltCard>
        </div>
        <div className="bg-opposite/10 md:p-6  rounded-xl shadow">
          <CodingFocusChart data={codingTime} />
        </div>

        {/* Row 2 */}
        <div className=" bg-opposite/10 md:p-6  rounded-xl shadow ">
          <TiltCard>
            <div
              style={{
                background: "var(--card-bg)",
                boxShadow: `0 8px 24px var(--card-shadow)`,
                border: `1px solid var(--card-border)`,
              }}
              className="rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-opposite">
                <Star className="h-5 w-5 text-rose-400" /> Favorite Games
              </h4>
              <GameCarousel games={favoriteGames} />
            </div>
          </TiltCard>
        </div>
        <div className="bg-opposite/10 md:p-6  rounded-xl shadow">
          <GamePrefsChart data={gamePrefs} />
        </div>

        {/* Row 3 */}
        <div className="bg-opposite/10 md:p-6 rounded-xl shadow h-auto md:h-[340px] relative">
        <div className="pt-22 pb-4 md:py-0">
          <TiltCard>
            <MusicCard />
            <PlayingBars className="mt-2" />
          </TiltCard>
          </div>
        </div>

        <div className="bg-opposite/10 md:p-6  rounded-xl shadow h-auto md:h-[340px] overflow-hidden pointer-events-none">
          <CanvasCard />
        </div>
      </div>

      <AnimeScroller />
    </section>
  );
}
