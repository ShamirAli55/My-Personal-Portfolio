import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import { Activity } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function LifestyleBalanceChart() {
  const lifestyleBalance = [
    { area: "Gaming", value: 30 },
    { area: "Coding", value: 35 },
    { area: "Music", value: 20 },
    { area: "Fitness", value: 10 },
    { area: "Social", value: 15 },
  ];

  return (
    <TiltCard className="md:col-span-2">
      <div
        style={{
          background: "var(--card-bg)",
          boxShadow: `0 8px 24px var(--card-shadow)`,
          border: `1px solid var(--card-border)`,
        }}
        className="rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <h4 className="mb-2 flex items-center gap-2 font-semibold text-opposite">
          <Activity className="h-5 w-5 text-rose-400" /> Lifestyle Balance
        </h4>
        <div className="h-80">
          <ResponsiveContainer>
            <RadarChart data={lifestyleBalance}>
              <PolarGrid
                stroke="hsl(var(--opposite))"
                strokeDasharray="3 3"
              />
              <PolarAngleAxis
                dataKey="area"
                tick={{ fill: "hsl(var(--opposite))" }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 40]}
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
                dataKey="value"
                stroke="hsl(160 60% 65%)" 
                fill="hsl(160 60% 65%)"
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
