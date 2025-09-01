import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Clock } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function CodingFocusChart() {
  
const codingTime = [
  { hour: "Morning", focus: 40 },
  { hour: "Afternoon", focus: 65 },
  { hour: "Evening", focus: 85 },
  { hour: "Late Night", focus: 95 },
];


  return (
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
              <Line type="monotone" dataKey="focus" stroke="#fb7185" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TiltCard>
  );
}
