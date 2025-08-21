import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 rounded-2xl shadow-xl bg-gray-800/40 backdrop-blur-md border border-gray-700"
      >
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-medium shadow-lg transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
