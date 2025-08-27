import { motion } from "framer-motion";

// Sample data arrays with placeholder images
const profile = {
  name: "Shamir",
  description: "Student | Web & Game Enthusiast | Anime Lover",
  image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80", // placeholder profile
};

const playlists = [
  {
    name: "Chill Hits",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
    img: "https://via.placeholder.com/300x200/1DB954/FFFFFF?text=Chill+Hits",
  },
  {
    name: "Gaming Beats",
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
    img: "https://via.placeholder.com/300x200/1DB954/FFFFFF?text=Gaming+Beats",
  },
];

const animeMovies = [
  { name: "Attack on Titan", img: "https://via.placeholder.com/300x400?text=AOT" },
  { name: "Demon Slayer", img: "https://via.placeholder.com/300x400?text=DS" },
  { name: "One Piece", img: "https://via.placeholder.com/300x400?text=OP" },
  { name: "Interstellar", img: "https://via.placeholder.com/300x400?text=Interstellar" },
  { name: "Inception", img: "https://via.placeholder.com/300x400?text=Inception" },
];

const games = [
  { name: "Valorant", img: "https://via.placeholder.com/300x200?text=Valorant" },
  { name: "GTA V", img: "https://via.placeholder.com/300x200?text=GTA+V" },
  { name: "Elden Ring", img: "https://via.placeholder.com/300x200?text=Elden+Ring" },
  { name: "Minecraft", img: "https://via.placeholder.com/300x200?text=Minecraft" },
  { name: "Witcher 3", img: "https://via.placeholder.com/300x200?text=Witcher+3" },
  { name: "Cyberpunk 2077", img: "https://via.placeholder.com/300x200?text=Cyberpunk" },
];

const hobbies = [
  { name: "Sketching", icon: "🎨" },
  { name: "Gaming", icon: "🎮" },
  { name: "Anime", icon: "📺" },
  { name: "Music", icon: "🎵" },
  { name: "Traveling", icon: "🌍" },
];

const BioPage = () => {
  return (
    <section className="min-h-screen w-full px-6 py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-36 h-36 rounded-full border-4 border-green-400 shadow-xl"
          />
          <h1 className="text-5xl font-extrabold text-green-400">{`Hi, I'm ${profile.name}`}</h1>
          <p className="text-gray-300 text-center text-lg md:text-xl">{profile.description}</p>
        </motion.div>

        {/* Spotify Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {playlists.map((pl, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/60 rounded-xl p-4 shadow-lg flex flex-col gap-3"
            >
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">🎵 {pl.name}</h2>
              <iframe
                src={pl.url}
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* Anime & Movies */}
        <div>
          <h2 className="text-3xl font-bold mb-6">🎬 Favorite Anime & Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {animeMovies.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 rounded-xl overflow-hidden shadow-lg"
              >
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-3 text-center text-lg font-semibold">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Games */}
        <div>
          <h2 className="text-3xl font-bold mb-6">🎮 Favorite Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {games.map((game, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 rounded-xl overflow-hidden shadow-lg text-center p-2"
              >
                <img src={game.img} alt={game.name} className="w-full h-32 object-cover rounded-t-xl" />
                <div className="p-2 font-semibold">{game.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies & Dreams */}
        <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">🌟 Hobbies & Dreams</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-md text-lg font-semibold"
              >
                <div className="text-4xl">{hobby.icon}</div>
                <div className="mt-2">{hobby.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BioPage;
