import { Link } from "react-router";
import { motion } from "motion/react"

const HeroBanner = () => {
  return (
    <div className="hero  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
          src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153253.jpg"
          alt="Travel illustration"
          className="max-w-md rounded-lg shadow-2xl"
          animate={{
            scale: [1, 1.05, 1], 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="text-center lg:text-left">
           <motion.h1
      initial={{scale:0}}
      animate={{scale:1, transition:{duration:4}}}
       className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-700">Welcome <motion.span
       animate={{
         color: ["#F59E0B", "#10B981", "#3B82F6"], 
        transition:{duration:4,repeat:Infinity}
       }}
       >To Tormate</motion.span> </motion.h1>
          <p className="py-6 text-gray-700">
            Discover unforgettable destinations and curated travel experiences with Toremate.
            Whether you're seeking adventure, relaxation, or culture — we’ve got the perfect package for you.
          </p>
          <Link to="/packages">
            <button className="btn btn-primary text-white hover:text-blue-700 hover:bg-white p-4">Explore All Packages</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
