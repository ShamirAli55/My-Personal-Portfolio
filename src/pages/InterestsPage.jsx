import { motion } from "framer-motion";
import { useState } from "react";

// Sample data
const profile = {
  name: "Shamir",
  description: "Student | Web & Game Enthusiast | Anime Lover",
  image: "https://picsum.photos/seed/1/200/200",
};

const hobbies = [
  { name: "Sketching", icon: "🎨" },
  { name: "Gaming", icon: "🎮" },
  { name: "Anime", icon: "📺" },
  { name: "Music", icon: "🎵" },
  { name: "Traveling", icon: "🌍" },
];

const games = [
  { name: "Valorant", img: "https://picsum.photos/seed/2/300/200" },
  { name: "Minecraft", img: "https://picsum.photos/seed/3/300/200" },
  { name: "Elden Ring", img: "https://picsum.photos/seed/4/300/200" },
  { name: "GTA V", img: "https://picsum.photos/seed/5/300/200" },
  { name: "Cyberpunk 2077", img: "https://picsum.photos/seed/6/300/200" },
];

const Card3D = ({ children }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    setRotateY((x - midX) / midX * 10); // rotate max 10deg
    setRotateX(-(y - midY) / midY * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.1 }}
      className="bg-white/10 border border-gradient-to-r from-green-400 via-purple-500 to-pink-500 backdrop-blur-md shadow-xl rounded-xl p-6 cursor-pointer transition-transform duration-300 perspective-1000"
    >
      {children}
    </motion.div>
  );
};

const InterestsPage = () => {
  return (
    <section className="min-h-screen w-full px-6 py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-36 h-36 rounded-full border-4 border-green-400 shadow-2xl"
          />
          <h1 className="text-5xl font-extrabold text-green-400">{`Hi, I'm ${profile.name}`}</h1>
          <p className="text-gray-300 text-lg md:text-xl">{profile.description}</p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">🌟 Hobbies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hobbies.map((hobby, idx) => (
              <Card3D key={idx}>
                <div className="text-5xl mb-2">{hobby.icon}</div>
                <div className="text-xl font-semibold text-center">{hobby.name}</div>
              </Card3D>
            ))}
          </div>
        </motion.div>

        {/* Favorite Games */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">🎮 Favorite Games</h2>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {games.map((game, idx) => (
              <Card3D key={idx}>
                <img
                  src={game.img}
                  alt={game.name}
                  className="w-64 h-36 object-cover rounded-xl mb-2 shadow-md"
                />
                <div className="text-center font-semibold text-lg">{game.name}</div>
              </Card3D>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InterestsPage;
