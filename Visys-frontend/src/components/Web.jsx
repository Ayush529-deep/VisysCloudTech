import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import capital from "../assets/UI.webp";
import cpg from "../assets/Web.jpg";
import education from "../assets/Internship.webp";

const slides = [
  {
    img: capital,
    heading: ["UI/UX", "Design", "Services"],
    tagline: "Creating Beautiful, Functional, and User-Centered Designs",
    highlight: "UI/UX",
  },
  {
    img: cpg,
    heading: ["Web", "Development", "Services"],
    tagline: "Innovative Web Solutions to Elevate Your Business",
    highlight: "Web Solutions",
  },
  {
    img: education,
    heading: ["Internship", "Program"],
    tagline: "Join Our Internship Program and Kickstart Your Career in Tech",
    highlight: "Internship",
  },
];

const Web = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].img}
          src={slides[index].img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CENTERED TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
        >
          {/* HEADING IN A SINGLE LINE */}
          <motion.h1
            key={slides[index].heading.join(" ")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {slides[index].heading.join(" ")}
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            <span className="text-cyan-400 font-semibold">
              {slides[index].highlight}
            </span>{" "}
            — {slides[index].tagline}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Web;
































