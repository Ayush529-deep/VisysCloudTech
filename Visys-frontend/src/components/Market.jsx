import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import capital from "../assets/capital.jpg";
import cpg from "../assets/CPG.jpg";
import education from "../assets/education.avif";

const slides = [
  {
    img: capital,
    heading: ["Capital", "Markets", "Solutions"],
    tagline: "Secure, Scalable & Intelligent Capital Market Solutions",
    highlight: "Capital Market",
  },
  {
    img: cpg,
    heading: ["CPG", "&", "Distribution"],
    tagline: "Smart, Scalable & Data-Driven CPG Solutions",
    highlight: "Data-Driven",
  },
  {
    img: education,
    heading: ["Education", "Technology", "Solutions"],
    tagline: "Empowering Learning Through Digital Innovation",
    highlight: "Digital Innovation",
  },
];

const Market = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    // 🔹 HEIGHT DECREASED (h-[75vh])
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].img}
          src={slides[index].img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover translate-y-16"
          initial={{ opacity: 0, scale: 1.02, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: 40 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative z-10 h-full flex items-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 TEXT SHIFTED MORE RIGHT */}
          <div className="max-w-3xl pl-32 text-white">
            {/* HEADING LINE ANIMATION */}
            {slides[index].heading.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                {line}
              </motion.h1>
            ))}

            {/* TAGLINE WITH SPAN */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl"
            >
              <span className="text-cyan-400 font-semibold">
                {slides[index].highlight}
              </span>{" "}
              — {slides[index].tagline}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>


  );
};

export default Market;

