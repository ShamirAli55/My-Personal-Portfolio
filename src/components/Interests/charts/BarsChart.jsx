import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Gaming", value: 85 },
  { name: "Music", value: 70 },
  { name: "Coding", value: 95 },
  { name: "Anime", value: 60 },
  { name: "Fitness", value: 50 },
];

export default function BarsChart() {
  return (
    <div className="w-full h-80 flex items-center justify-center">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="hsl(220,90%,60%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
