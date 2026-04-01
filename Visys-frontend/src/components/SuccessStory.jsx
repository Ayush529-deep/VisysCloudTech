import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    name: "Karthik",
    grade: "Seventh Grade",
    img: "https://cloud4coolkids.com/assets/images/testimonial/20240827122142user.jpg",
    text: "Karthik developed impressive coding skills and confidence through Cloud4CoolKids."
  },
  {
    name: "Sai",
    grade: "Ninth Grade",
    img: "https://cloud4coolkids.com/assets/images/testimonial/20240827123227user.jpg",
    text: "Sai excelled in cloud computing by balancing schoolwork with real projects."
  },
  {
    name: "Ambika",
    grade: "Ninth Grade",
    img: "https://cloud4coolkids.com/assets/images/testimonial/20240827120909user.jpg",
    text: "Ambika built a strong foundation in technology through hands-on learning."
  },
  {
    name: "Ananth",
    grade: "Eighth Grade",
    img: "https://cloud4coolkids.com/assets/images/testimonial/20240827121243user.jpg",
    text: "Ananth discovered his passion for programming and problem solving."
  }
];

const SuccessStory = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const prev = () =>
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % stories.length);

  /* 🔁 AUTO PLAY */
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getPosition = (i) => {
    const diff = (i - index + stories.length) % stories.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === stories.length - 1) return "left";
    return "hidden";
  };

  const variants = {
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      rotateY: 0
    },
    left: {
      x: -260,
      scale: 0.85,
      opacity: 0.4,
      zIndex: 5,
      rotateY: 20
    },
    right: {
      x: 260,
      scale: 0.85,
      opacity: 0.4,
      zIndex: 5,
      rotateY: -20
    },
    hidden: {
      opacity: 0,
      scale: 0.7,
      zIndex: 0
    }
  };

  return (
    <section className="w-full py-14 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-sm mb-2 text-cyan-600">
          Real Students, Real Results
        </p>

        <h2 className="text-4xl font-bold mb-16 text-gray-900">
          Our Success Stories
        </h2>

        {/* CAROUSEL */}
        <div
          className="relative flex items-center justify-center h-[380px] perspective-[1200px]"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {stories.map((story, i) => {
            const position = getPosition(i);

            return (
              <motion.div
                key={i}
                variants={variants}
                animate={position}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-[320px] bg-white/90 backdrop-blur-xl
                           text-gray-800 rounded-3xl shadow-2xl p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4
                             border-4 border-cyan-500"
                />

                <p className="text-center text-gray-600 mb-6">
                  “{story.text}”
                </p>

                <h4 className="text-center font-bold text-cyan-600 uppercase">
                  {story.name}
                </h4>
                <p className="text-center text-sm text-gray-500">
                  {story.grade}
                </p>
              </motion.div>
            );
          })}

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-0 p-3 rounded-full bg-white
                       text-cyan-600 shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 p-3 rounded-full bg-white
                       text-cyan-600 shadow-lg hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
