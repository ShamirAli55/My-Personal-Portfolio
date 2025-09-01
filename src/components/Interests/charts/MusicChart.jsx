import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Music2 } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function MusicChart() {
  const musicHabits = [
  { genre: "Lofi", hours: 120 },
  { genre: "EDM", hours: 95 },
  { genre: "Hip-Hop", hours: 80 },
  { genre: "Game OST", hours: 140 },
  { genre: "Acoustic", hours: 60 },
];
  return (
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
  );
}
