import React ,{useMemo} from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Gamepad2 } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function GamesChart() {
    const favoriteGames = [
  { title: "Elden Ring", hours: 240, rating: 5 },
  { title: "The Witcher 3", hours: 180, rating: 5 },
  { title: "Valorant", hours: 600, rating: 4 },
  { title: "Minecraft", hours: 350, rating: 4 },
];

  const hoursByGame = useMemo(
    () => favoriteGames.map((g) => ({ name: g.title, hours: g.hours })),
    []
  );
  return (
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
  );
}
