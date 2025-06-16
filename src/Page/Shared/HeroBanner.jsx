import { Link } from "react-router";
import { motion } from "framer-motion";
import banner from "../../assets/banner.jpg"

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 text-white overflow-hidden">
   
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${banner})`,
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
     
      <div className="absolute inset-0 bg-opacity-50" style={{ zIndex: 1 }}></div>

      
      <div className="relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Welcome{" "}
          <motion.span
            animate={{
              color: ["#F59E0B", "#10B981", "#3B82F6"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            To Toremate
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="py-6 text-base md:text-lg"
        >
          Discover unforgettable destinations and curated travel experiences with Toremate.
          Whether you're seeking <span className="font-semibold text-yellow-300">adventure</span>,
          <span className="font-semibold text-green-300"> relaxation</span>, or
          <span className="font-semibold text-purple-300"> culture</span> — we’ve got the perfect package for you.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link to="/packages">
            <button className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg transition duration-300">
              Explore All Packages
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
