import React from "react";
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
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
              <Radar dataKey="value" stroke="#34d399" fill="#34d399" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TiltCard>
  );
}
