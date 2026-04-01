import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/Screenshot-1.png";
import img2 from "../assets/Screenshot-2.png";
import img3 from "../assets/Screenshot-3.png";

const images = [img1, img2, img3];

const Cloudkid = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen relative overflow-hidden">

      {/* BLURRED BACKGROUND (same image) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`bg-${index}`}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* MAIN IMAGE (NO CROP) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`main-${index}`}
          src={images[index]}
          alt="slider"
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DOTS ON IMAGE */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i
                ? "bg-purple-500 scale-125"
                : "bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Cloudkid;
