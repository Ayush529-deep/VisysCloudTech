import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../assets/7101913-uhd_2560_1440_25fps.mp4";

const boxData = [
  {
    title: "Enterprise Security",
    desc: "Advanced protection systems ensuring your business data stays safe and compliant.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud architecture built for performance, flexibility and reliability.",
  },
  {
    title: "AI Automation",
    desc: "Smart automation solutions to reduce manual work and boost productivity.",
  },
  {
    title: "24/7 Support",
    desc: "Dedicated technical support ensuring zero downtime and smooth operations.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % boxData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#142755]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#142755] via-[#142755]/70 to-transparent" />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -60, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 right-32 w-[450px] h-[450px] bg-[#369CA8]/30 rounded-full blur-[140px]"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-full bg-[#369CA8]/20 backdrop-blur-md text-sm tracking-wider uppercase"
          >
            Trusted Digital Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Experience You Can <br />
            <span className="text-[#369CA8]">Rely On</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/80 text-lg md:text-xl max-w-xl"
          >
            We deliver reliable, scalable and future-ready digital solutions that help businesses grow faster with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#369CA8] to-[#4CC6D3] px-10 py-4 rounded-lg font-semibold shadow-xl shadow-[#369CA8]/40"
            >
              Get Started →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 hover:border-white px-10 py-4 rounded-lg backdrop-blur-md"
            >
              Free Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative w-full h-80 md:h-[28rem] flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            {boxData
              .slice(currentIndex, currentIndex + 1)
              .map((box) => (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 150, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -150, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ y: -12, scale: 1.07, rotate: [0, 1, -1, 0] }}
                  className="absolute w-64 sm:w-72 md:w-80 p-14 md:p-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden"
                >
                  {/* Animated Glow */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-[#369CA8]/30 rounded-full blur-3xl"
                  />

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-6">
                    {box.title}
                  </h3>

                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {box.desc}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="absolute bottom-4 flex gap-3">
            {boxData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-[#369CA8]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;








// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center
//                  bg-gradient-to-br from-[#2C7E87] via-[#369CA8] to-[#2C7E87]
//                  text-white overflow-hidden pt-28"
//     >
//       {/* Animated Background Gradient Shift */}
//       <motion.div
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 opacity-40 bg-[length:200%_200%]"
//       />

//       {/* Floating Background Glows */}
//       <motion.div
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 -right-40 w-[600px] h-[600px]
//                    bg-[#369CA8]/30 rounded-full blur-[140px]"
//       />

//       <motion.div
//         animate={{ y: [0, 30, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-10 -left-40 w-[500px] h-[500px]
//                    bg-[#6FC2CC]/20 rounded-full blur-[120px]"
//       />

//       {/* Center Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 max-w-3xl mx-auto px-6 text-center"
//       >
//         {/* Badge */}
//         <motion.span
//           variants={itemVariants}
//           className="inline-block mb-6 px-4 py-1 rounded-full
//                      bg-[#369CA8]/20 text-white
//                      text-xs tracking-widest uppercase"
//         >
//           Trusted Business Partner
//         </motion.span>

//         {/* Heading */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//         >
//           Experience You Can <br />
//           <span
//             className="bg-gradient-to-r from-white to-[#6FC2CC]
//                        bg-clip-text text-transparent"
//           >
//             Rely On.
//           </span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
//         >
//           We deliver reliable, scalable, and future-ready digital solutions
//           that help businesses grow with confidence and clarity.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center gap-5 flex-wrap"
//         >
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             animate={{ boxShadow: [
//               "0 0 0 rgba(54,156,168,0.4)",
//               "0 0 40px rgba(54,156,168,0.5)",
//               "0 0 0 rgba(54,156,168,0.4)",
//             ]}}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="
//               bg-gradient-to-r from-[#369CA8] to-[#6FC2CC]
//               hover:from-[#2C7E87] hover:to-[#369CA8]
//               text-white px-8 py-3 rounded-md
//               font-semibold transition-all
//               shadow-lg shadow-[#369CA8]/40"
//           >
//             Get Started →
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="
//               border border-white/30
//               hover:border-white
//               px-8 py-3 rounded-md
//               font-semibold text-white
//               transition-all hover:bg-white/10"
//           >
//             Free Consultation
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




















// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center
//                         bg-gradient-to-br from-[#2C7E87] via-[#369CA8] to-[#2C7E87]
//                         text-white overflow-hidden pt-28">

//       {/* Background Glows */}
//       <div className="absolute top-20 -right-40 w-[600px] h-[600px]
//                       bg-[#369CA8]/30 rounded-full blur-[140px]" />
//       <div className="absolute bottom-10 -left-40 w-[500px] h-[500px]
//                       bg-[#6FC2CC]/20 rounded-full blur-[120px]" />

//       {/* Center Content */}
//       <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

//         {/* Badge */}
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-block mb-6 px-4 py-1 rounded-full
//                      bg-[#369CA8]/20 text-white
//                      text-xs tracking-widest uppercase"
//         >
//           Trusted Business Partner
//         </motion.span>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//         >
//           Experience You Can <br />
//           <span className="bg-gradient-to-r from-white to-[#6FC2CC]
//                            bg-clip-text text-transparent">
//             Rely On.
//           </span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
//         >
//           We deliver reliable, scalable, and future-ready digital solutions
//           that help businesses grow with confidence and clarity.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="flex justify-center gap-5 flex-wrap"
//         >
//           <button className="
//             bg-gradient-to-r from-[#369CA8] to-[#6FC2CC]
//             hover:from-[#2C7E87] hover:to-[#369CA8]
//             text-white px-8 py-3 rounded-md
//             font-semibold transition-all
//             shadow-lg shadow-[#369CA8]/40
//             hover:scale-105">
//             Get Started →
//           </button>

//           <button className="
//             border border-white/30
//             hover:border-white
//             px-8 py-3 rounded-md
//             font-semibold text-white
//             transition-all hover:bg-white/10">
//             Free Consultation
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




















// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center
//                         bg-gradient-to-br from-[#0B0F14] via-[#0E1621] to-[#0B0F14]
//                         text-white overflow-hidden pt-28">

//       {/* Background Glows */}
//       <div className="absolute top-20 -right-40 w-[600px] h-[600px]
//                       bg-emerald-500/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-10 -left-40 w-[500px] h-[500px]
//                       bg-teal-400/10 rounded-full blur-[120px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

       



//         {/* LEFT CONTENT */}
//         <div>
//           {/* Badge */}
//           <motion.span
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-block mb-6 px-4 py-1 rounded-full
//                        bg-emerald-500/10 text-emerald-400
//                        text-xs tracking-widest uppercase"
//           >
//             Trusted Business Partner
//           </motion.span>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Experience You Can <br />
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-400
//                              bg-clip-text text-transparent">
//               Rely On.
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-300 text-lg max-w-xl mb-10"
//           >
//             We deliver reliable, scalable, and future-ready digital solutions
//             that help businesses grow with confidence and clarity.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex gap-5"
//           >
//             <button className="
//               bg-gradient-to-r from-emerald-500 to-teal-500
//               hover:from-emerald-400 hover:to-teal-400
//               text-black px-8 py-3 rounded-md
//               font-semibold transition-all
//               shadow-lg shadow-emerald-500/30
//               hover:scale-105">
//               Get Started →
//             </button>

//             <button className="
//               border border-white/20
//               hover:border-emerald-400
//               px-8 py-3 rounded-md
//               font-semibold text-white
//               transition-all hover:text-emerald-400">
//               Free Consultation
//             </button>
//           </motion.div>
//         </div>

//         {/* RIGHT VISUAL / ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative hidden md:block"
//         >
//           <div className="w-full h-[420px] rounded-2xl
//                           bg-white/5 backdrop-blur-xl
//                           border border-white/10
//                           shadow-2xl
//                           flex items-center justify-center">

//             <motion.div
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="text-center"
//             >
//               <p className="text-emerald-400 text-sm tracking-widest mb-2">
//                 INNOVATION • TRUST • GROWTH
//               </p>
//               <h3 className="text-2xl font-bold">
//                 Powering Modern Businesses
//               </h3>
//             </motion.div>

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;
