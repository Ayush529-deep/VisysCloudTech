import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 100,
    label: "Happy Clients",
    img: "/src/assets/client.jpg",
  },
  {
    value: 125,
    label: "Cloud Migrations",
    img: "/src/assets/cloud.webp",
  },
  {
    value: 155,
    label: "Projects Delivered",
    img: "/src/assets/projects.avif",
  },
  {
    value: 10,
    label: "DevOps Specialists",
    img: "/src/assets/Devops.jpeg",
  },
];

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // animation duration
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}+</span>;
};

const FutureSection = () => {
  return (
    <section className="relative py-0 overflow-hidden bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] text-white">
      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-400 rounded-full blur-[130px] opacity-40" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-600 rounded-full blur-[130px] opacity-40" />

      {/* Stats Section */}
      <div className="relative z-10 max-w-6xl mx-auto  mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 120 }} // 👉 right side se
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 5.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.06 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl"
          >
            {/* Floating Image */}
            <motion.img
              src={item.img}
              alt={item.label}
              className="w-14 mx-auto mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Counter */}
            <motion.h2
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="text-4xl font-bold text-yellow-400"
            >
              <Counter value={item.value} />
            </motion.h2>

            <p className="mt-2 text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Join Section */}
      <section className="relative mt-28 bg-gradient-to-r from-white via-gray-100 to-white py-20 overflow-hidden">
        {/* side glow */}
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto px-6"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14 text-center">
            <motion.h2
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-extrabold mb-6 text-gray-900"
            >
              Join Us in Shaping the Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
            >
              We are more than just a tech company — we are a movement. Whether
              you're an entrepreneur, a student, or a lifelong learner, Visys
              Cloud Technologies is here to support your digital journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg shadow-lg cursor-pointer"
              >
                🚀 Let’s innovate, empower & transform
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default FutureSection;
