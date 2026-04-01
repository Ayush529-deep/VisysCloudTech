import React, { useState } from "react";
import { motion } from "framer-motion";
import teamImage from "../assets/teamImage.jpg";

const cardData = [
  {
    title: "Smart Planning",
    desc: "We deliver cost-effective, scalable IT solutions that drive business growth and efficiency.",
  },
  {
    title: "Broad Thinking",
    desc: "We leverage multi-industry expertise and global perspectives to create adaptive solutions.",
  },
  {
    title: "Next-Gen Ideas",
    desc: "We design forward-thinking systems that prepare your business for tomorrow.",
  },
  {
    title: "Skilled Team",
    desc: "Our experienced team collaborates to achieve outstanding and measurable results.",
  },
];

const BusinessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 25; // more rotation
    const rotateX = ((y / rect.height) - 0.5) * -25;
    setHoveredIndex(index);
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative py-22 bg-white text-gray-900 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#369CA8]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#369CA8]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Innovative Solutions for <br />
              <span className="bg-gradient-to-r from-[#369CA8] to-[#4CC6D3] bg-clip-text text-transparent">
                Every Business Need
              </span>
            </h2>

            <p className="text-[#369CA8]/80 text-lg mb-6">
              We craft solutions that drive efficiency, enhance performance,
              and open doors to new business opportunities.
            </p>

            <p className="text-[#369CA8]/60 mb-8">
              With expert strategies and cutting-edge technology, we help you
              achieve your goals and stand out in the marketplace.
            </p>

            <button className="bg-gradient-to-r from-[#369CA8] to-[#4CC6D3]
                               hover:from-[#4CC6D3] hover:to-[#369CA8]
                               text-white px-8 py-3 rounded-md
                               font-semibold transition-all
                               shadow-lg shadow-[#369CA8]/30
                               hover:scale-105">
              Get Started →
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src={teamImage}
              alt="Team"
              className="rounded-2xl shadow-2xl border border-[#369CA8]/20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 rounded-2xl border border-[#369CA8]/20 blur-sm" />
          </motion.div>
        </div>

        {/* Feature Cards - 3D Carousel Style */}
        <div className="grid md:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              animate={
                hoveredIndex === index
                  ? { rotateX: rotation.rotateX, rotateY: rotation.rotateY, scale: 1.1 }
                  : { rotateX: 0, rotateY: 0, scale: 1 }
              }
              whileHover={{
                backgroundColor: "#369CA8",
                color: "#fff",
                transition: { duration: 0.3 },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="relative bg-white/5 backdrop-blur-xl
                         border border-[#369CA8]/20
                         rounded-2xl p-10
                         transition-all duration-300
                         hover:-translate-y-3
                         hover:shadow-xl hover:shadow-[#369CA8]/20 cursor-pointer"
            >
              {/* Glow Animation */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-[#369CA8]/20 rounded-full blur-2xl pointer-events-none"
              />

              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-[#369CA8]"}`}>
                {card.title}
              </h3>

              <p className={`text-sm leading-relaxed transition-colors duration-300 ${hoveredIndex === index ? "text-white/80" : "text-[#369CA8]/80"}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
