import React from "react";
import { motion } from "framer-motion";

import ai from "../assets/ai.jpg";
import cloud from "../assets/Artificial.jpg";
import coding from "../assets/coding.jpg";
import os from "../assets/os.jpg";

const categories = [
  { title: "Artificial Intelligence", img: ai },
  { title: "Cloud Computing", img: cloud },
  { title: "Coding", img: coding },
  { title: "Operating System", img: os },
];

const FeaturedCategories = () => {
  return (
    <section
      className="w-full py-14 overflow-hidden
                 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-cyan-600 uppercase mb-2">
            Find your best suitable categories
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Categories
          </h2>
        </div>

        {/* INFINITE CAROUSEL */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* DUPLICATE LIST TO MAKE INFINITE */}
            {[...categories, ...categories].map((item, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0
                           h-[380px] w-[200px]
                           hover:w-[300px]
                           transition-all duration-500 ease-in-out
                           rounded-3xl overflow-hidden cursor-pointer
                           bg-white/30 backdrop-blur-lg
                           border border-white/40 shadow-2xl"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                             bg-gradient-to-t
                             from-black/80 via-black/40 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition duration-300"
                />

                {/* TEXT */}
                <div
                  className="absolute bottom-6 left-6 right-6
                             opacity-0 group-hover:opacity-100
                             transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;
