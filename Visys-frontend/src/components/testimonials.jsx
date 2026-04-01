import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chandu",
    text: "The work culture here is fantastic! Strong team collaboration, continuous learning, and knowledge sharing make it a great place for personal and professional growth.",
    rating: 4,
  },
  {
    name: "Tharun",
    text: "As an intern, I had the chance to work on live projects, which helped me gain practical experience and improve my development skills, boosting my confidence and knowledge.",
    rating: 4,
  },
  {
    name: "Jay",
    text: "A front-end internship at Visys Cloud Technologies provides hands-on UI experience, modern frameworks exposure, and real-world project work essential for web development.",
    rating: 4,
  },
  {
    name: "Tejaswini",
    text: "A front-end internship at Visys Cloud Technologies provides hands-on UI experience, modern frameworks exposure, and real-world project work essential for web development.",
    rating: 4,
  },
  {
    name: "Rohan",
    text: "A front-end internship at Visys Cloud Technologies provides hands-on UI experience, modern frameworks exposure, and real-world project work essential for web development.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    const total = testimonials.length;
    const diff = (i - index + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section className="relative py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#369CA8] mb-24">
          What Our Client's Say About Visys
        </h2>

        <div className="relative h-[350px] flex items-center justify-center perspective-[1200px]">

          {testimonials.map((item, i) => {
            const position = getPosition(i);

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x:
                    position === "center"
                      ? 0
                      : position === "left"
                      ? -350
                      : position === "right"
                      ? 350
                      : 0,
                  scale: position === "center" ? 1 : 0.8,
                  rotateY:
                    position === "left"
                      ? 40
                      : position === "right"
                      ? -40
                      : 0,
                  opacity: position === "hidden" ? 0 : 1,
                  zIndex: position === "center" ? 10 : 5,
                }}
                transition={{ duration: 0.8 }}
                className="absolute w-[340px]
                  bg-white border border-[#369CA8]/20
                  rounded-3xl p-8
                  shadow-2xl text-left"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="text-[#369CA8] fill-[#369CA8] w-5 h-5"
                    />
                  ))}
                </div>

                <p className="text-[#369CA8]/80 text-sm leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <h4 className="text-[#369CA8] font-semibold text-lg">
                  - {item.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;






















// import React from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Chandu",
//     text: "The work culture here is fantastic! Strong team collaboration, continuous learning, and knowledge sharing make it a great place for personal and professional growth.",
//     rating: 4,
//   },
//   {
//     name: "Tharun",
//     text: "As an intern, I had the chance to work on live projects, which helped me gain practical experience and improve my development skills, boosting my confidence and knowledge.",
//     rating: 4,
//   },
//   {
//     name: "Jay",
//     text: "A front-end internship at Visys Cloud Technologies provides hands-on UI experience, modern frameworks exposure, and real-world project work essential for web development.",
//     rating: 4,
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="relative py-28
//       bg-gradient-to-br from-[#0B0F14] via-[#0E1621] to-[#0B0F14]
//       overflow-hidden">

//       {/* Background Glow Effects */}
//       <div className="absolute -top-20 left-1/2 -translate-x-1/2
//         w-[700px] h-[700px]
//         bg-emerald-500/10 rounded-full blur-[160px]" />

//       <div className="absolute bottom-0 right-0
//         w-[400px] h-[400px]
//         bg-teal-400/10 rounded-full blur-[140px]" />

//       <div className="relative max-w-7xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold text-white mb-20"
//         >
//           What Our Client's Say About Visys
//         </motion.h2>

//         {/* Moving Row */}
//         <motion.div
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="flex gap-10 w-max"
//         >
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, rotateY: 6 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="min-w-[350px] max-w-[350px]
//                 bg-white/5 backdrop-blur-xl
//                 border border-white/10
//                 rounded-3xl p-8
//                 shadow-xl text-left
//                 relative overflow-hidden"
//             >
//               {/* Animated Glow Border */}
//               <div className="absolute inset-0 rounded-3xl
//                 bg-gradient-to-r from-emerald-400/20 to-teal-400/20
//                 opacity-0 hover:opacity-100
//                 transition-opacity duration-700 blur-xl" />

//               {/* Stars */}
//               <div className="flex gap-1 mb-5">
//                 {[...Array(item.rating)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <Star className="text-emerald-400 fill-emerald-400 w-5 h-5" />
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Text */}
//               <p className="text-slate-300 text-sm leading-relaxed mb-6">
//                 "{item.text}"
//               </p>

//               {/* Name */}
//               <h4 className="text-white font-semibold text-lg">
//                 - {item.name}
//               </h4>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;
