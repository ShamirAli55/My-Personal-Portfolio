import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white relative overflow-hidden px-4 transition-colors duration-300">
      <div className="absolute inset-0 hidden dark:block">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl bg-white/70 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300 dark:border-gray-700 max-w-lg w-full transition-colors duration-300"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 1,
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6"
        >
          <span className="absolute inset-0 text-red-800 dark:text-red-700 blur-sm select-none">
            404
          </span>
          <span className="absolute inset-0 text-red-400 dark:text-red-300 opacity-70 select-none">
            404
          </span>
          <span className="relative text-red-600 dark:text-red-500">404</span>
        </motion.div>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Lost in Space
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base md:text-lg max-w-md mx-auto px-2">
          Oops! You just warped into the void. This page doesn’t exist or got
          abducted by aliens 👽.
        </p>

        <Link
          to="/"
          className="relative inline-block px-6 sm:px-8 py-3 bg-red-600 dark:bg-red-500 rounded-xl font-medium shadow-lg overflow-hidden group text-sm sm:text-base transition-colors duration-300"
        >
          <span className="relative z-10">Back to Home</span>
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-red-700/40 dark:bg-red-800/40 z-0"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
