import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Clock } from "lucide-react";
import TiltCard from "../ui/TiltCard";

export default function CodingFocusChart({ data }) {
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
          <Clock className="h-5 w-5 text-rose-400" /> Coding Focus by Time
        </h4>
        <div className="h-72">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--opposite))" 
              />
              <XAxis dataKey="hour" tick={{ fill: "hsl(var(--opposite))" }} />
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
                dataKey="focus"
                stroke="hsl(350 90% 70%)" 
                strokeWidth={2}
                dot={{ stroke: "hsl(350 90% 70%)", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TiltCard>
  );
}
