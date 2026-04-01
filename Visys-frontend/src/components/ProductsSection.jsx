import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Cloud Cool Kids",
    img: "/src/assets/cloudLogo.png",
  },
  {
    id: 2,
    name: "AI4Mahila",
    img: "/src/assets/ai4mahila.png",
  },
];

const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20; // tilt left/right
    const rotateX = ((y / rect.height) - 0.5) * -20; // tilt up/down

    setHoveredIndex(index);
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="relative py-8 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        w-[700px] h-[700px] bg-[#369CA8]/10 rounded-full blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#369CA8]">
            <span className="relative inline-block">
              Our Launched Products
              <span className="absolute -bottom-3 left-0 w-full h-[3px]
                bg-gradient-to-r from-[#369CA8] to-[#4CC6D3] rounded-full" />
            </span>
          </h2>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              animate={
                hoveredIndex === index
                  ? { rotateX: rotation.rotateX, rotateY: rotation.rotateY, scale: 1.05 }
                  : { rotateX: 0, rotateY: 0, scale: 1 }
              }
              whileHover={{
                backgroundColor: "#369CA8",
                transition: { duration: 0.3 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className={`relative rounded-3xl p-12 shadow-xl border border-gray-200
                transition-all duration-500 cursor-pointer`}
            >
              {/* Floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={`rounded-xl p-6 shadow-sm flex items-center justify-center
                  transition-colors duration-300
                  ${hoveredIndex === index ? "bg-white/10" : "bg-white"}`}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-24 object-contain"
                  />
                </div>

                <h3 className={`mt-8 text-2xl font-bold transition-colors duration-300
                  ${hoveredIndex === index ? "text-white" : "text-[#369CA8]"}`}>
                  {product.name}
                </h3>

                <p className={`mt-3 text-sm transition-colors duration-300
                  ${hoveredIndex === index ? "text-white/80" : "text-[#369CA8]/80"}`}>
                  Innovative digital solution crafted for impact and growth.
                </p>
              </motion.div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 rounded-3xl
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700 blur-md pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
