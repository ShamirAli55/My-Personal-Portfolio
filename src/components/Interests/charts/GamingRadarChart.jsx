import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function GamingRadarChart() {
  const data = [
    { subject: "Strategy", A: 90 },
    { subject: "Shooter", A: 70 },
    { subject: "Adventure", A: 85 },
    { subject: "MMO", A: 65 },
    { subject: "RPG", A: 95 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.2)" />
        <PolarAngleAxis dataKey="subject" stroke="#fff" />
        <PolarRadiusAxis stroke="#fff" />
        <Radar name="Skill" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
