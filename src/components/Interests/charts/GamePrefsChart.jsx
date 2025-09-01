import React from "react";
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Gauge } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function GamePrefsChart({data}) {


  return (
    <TiltCard>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h4 className="mb-2 flex items-center gap-2 font-semibold text-zinc-200">
          <Gauge className="h-5 w-5 text-rose-400" /> Game Genre Affinity
        </h4>
        <div className="h-72">
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar dataKey="score" stroke="#fb7185" fill="#fb7185" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TiltCard>
  );
}
