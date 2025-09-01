import GamingRadarChart from "../charts/GamingRadarChart";

export default function GamesSection() {
  const games = [
    { title: "Valorant", description: "Tactical FPS with agents." },
    { title: "Elden Ring", description: "Souls-like open world RPG." },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-gray-900 p-4 shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold">{game.title}</h3>
            <p className="text-sm text-gray-400">{game.description}</p>
            <div className="mt-4">
              <GamingRadarChart />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
