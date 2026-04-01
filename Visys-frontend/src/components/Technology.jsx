import React from "react";
import { motion } from "framer-motion";
import exampleVideo from "../assets/7660169-uhd_2160_3840_25fps.mp4";

const Technology = () => {
  const overlayText = [
    <>
      At <span className="text-indigo-600 font-bold">VISYS CLOUD TECHNOLOGIES</span>, 
      we help educational institutions and ed-tech platforms embrace digital transformation through innovative, scalable, and learner-centric solutions. 
      From schools and colleges to professional training and corporate learning, our technology solutions enhance teaching effectiveness, improve student engagement, and simplify academic operations.
    </>
  ];

  return (
    <section className="relative w-full flex justify-center items-center py-0">
      
      {/* Background Video */}
      <video
        src={exampleVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-[500px] object-cover rounded-1xl shadow-lg"
      />

      {/* Overlay with semi-transparent dark background */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center rounded-2xl px-4 md:px-0">
        {overlayText.map((text, index) => (
          <motion.h2
            key={index}
            className="text-white text-xl md:text-2xl font-bold mb-6 leading-relaxed max-w-[90%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            {text}
          </motion.h2>
        ))}
      </div>
    </section>
  );
};

export default Technology;
