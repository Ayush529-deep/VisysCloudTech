import React from "react";
import { motion } from "framer-motion";
import businessImage from "../assets/business.webp"; // use your actual path

const AboutUsSection = () => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${businessImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          KNOW MORE{" "}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#00f0ff]" // cyan highlight like your example
          >
            ABOUT US
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/80 mt-4 text-lg md:text-xl"
        >
          "Together, we create, innovate, and lead the future."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8"
        >
          <button className="bg-[#369CA8] hover:bg-[#4CC6D3] text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-[#369CA8]/30 hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Optional animated silhouettes effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-4 opacity-50">
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2 + idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-24 bg-black/40 rounded-t-lg"
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
