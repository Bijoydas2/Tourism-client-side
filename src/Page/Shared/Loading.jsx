import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      ></motion.div>

      {/* Text */}
      <motion.p
        className="mt-6 text-gray-500  text-lg font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default Loading;
