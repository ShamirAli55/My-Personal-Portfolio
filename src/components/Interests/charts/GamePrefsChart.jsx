import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import { Gauge } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function GamePrefsChart({ data }) {
  return (
    <TiltCard>
      <div
        style={{
          background: "var(--card-bg)",
          boxShadow: `0 8px 24px var(--card-shadow)`,
          border: `1px solid var(--card-border)`,
        }}
        className="rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <h4 className="mb-2 flex items-center gap-2 font-semibold text-opposite">
          <Gauge className="h-5 w-5 text-rose-400" /> Game Genre Affinity
        </h4>
        <div className="h-72">
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid stroke="hsl(var(--opposite))" strokeDasharray="3 3" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "hsl(var(--opposite))" }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "hsl(var(--opposite))" }}
                stroke="hsl(var(--opposite))"
              />
              <Tooltip
                contentStyle={{
                  background: "var(--card-bg)",
                  border: `1px solid var(--card-border)`,
                  color: "hsl(var(--opposite))",
                }}
              />
              <Radar
                dataKey="score"
                stroke="hsl(350 90% 70%)"
                fill="hsl(350 90% 70%)"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TiltCard>
  );
}
