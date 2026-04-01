import React, { useState } from "react";
import { motion } from "framer-motion";
import videoCover from "../assets/AboutImage.jpg";

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
  const [light, setLight] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((y / rect.height) - 0.5) * -14;

    setRotate({ rotateX, rotateY });
    setLight({ x, y });
  };

  return (
    <section className="relative py-22 bg-white text-gray-900 overflow-hidden">

      {/* Floating Brand Blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[420px] h-[420px]
        bg-[#369CA8]/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[380px] h-[380px]
        bg-[#369CA8]/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 rounded-full
          bg-[#369CA8]/10 text-[#369CA8]
          text-xs tracking-widest uppercase">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Architecting the{" "}
            <span className="text-[#369CA8] relative">
              Digital Future
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#369CA8]/40 rounded-full" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We provide{" "}
            <span className="text-[#369CA8] font-semibold">
              website development
            </span>{" "}
            and custom software solutions designed especially for small businesses.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#369CA8] hover:bg-[#2f8791]
            text-white px-8 py-3 rounded-xl
            font-semibold shadow-lg transition-all"
          >
            Learn More →
          </motion.button>
        </motion.div>

        {/* RIGHT VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={() => setRotate({ rotateX: 0, rotateY: 0 })}
            animate={rotate}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-full h-[420px] rounded-2xl
            bg-white border border-gray-200
            shadow-2xl overflow-hidden"
          >

            {/* Cursor Glow */}
            <div
              className="absolute w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{
                background: "#369CA8",
                left: light.x - 80,
                top: light.y - 80,
              }}
            />

            {!playVideo ? (
              <>
                <img
                  src={videoCover}
                  alt="Video Cover"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                {/* Play Button */}
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full
                    bg-[#369CA8]
                    flex items-center justify-center
                    shadow-lg shadow-[#369CA8]/40"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </motion.div>
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="About Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
































// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import videoCover from "../assets/AboutImage.jpg";

// const About = () => {
//   const [playVideo, setPlayVideo] = useState(false);

//   return (
//     <section className="relative py-28
//                         bg-gradient-to-br from-[#0B0F14] via-[#0E1621] to-[#0B0F14]
//                         text-white overflow-hidden">

//       {/* Background Glows */}
//       <div className="absolute top-10 -right-40 w-[600px] h-[600px]
//                       bg-emerald-500/10 rounded-full blur-[140px]" />
//       <div className="absolute bottom-10 -left-40 w-[500px] h-[500px]
//                       bg-teal-400/10 rounded-full blur-[120px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <span className="inline-block mb-6 px-4 py-1 rounded-full
//                            bg-emerald-500/10 text-emerald-400
//                            text-xs tracking-widest uppercase">
//             About Us
//           </span>

//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
//             Architecting the{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-400
//                              bg-clip-text text-transparent">
//               Digital Future
//             </span>
//           </h2>

//           <p className="text-slate-300 text-lg leading-relaxed mb-6">
//             We provide website development and custom software solutions
//             designed especially for small businesses.
//           </p>

//           <button className="bg-gradient-to-r from-emerald-500 to-teal-500
//                              hover:from-emerald-400 hover:to-teal-400
//                              text-black px-8 py-3 rounded-md
//                              font-semibold transition-all
//                              shadow-lg shadow-emerald-500/30
//                              hover:scale-105">
//             Learn More →
//           </button>
//         </div>

//         {/* RIGHT SIDE - VIDEO */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="w-full h-[420px] rounded-2xl
//                           bg-white/5 backdrop-blur-xl
//                           border border-white/10
//                           shadow-2xl overflow-hidden relative">

//             {!playVideo ? (
//               <>
//                 {/* Thumbnail */}
//                 <img
//                   src={videoCover}
//                   alt="Video Cover"
//                   className="w-full h-full object-cover rounded-2xl"
//                 />

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/40" />

//                 {/* Play Button */}
//                 <button
//                   onClick={() => setPlayVideo(true)}
//                   className="absolute inset-0 flex items-center justify-center"
//                 >
//                   <div className="w-20 h-20 rounded-full
//                                   bg-gradient-to-r from-emerald-500 to-teal-500
//                                   flex items-center justify-center
//                                   shadow-lg shadow-emerald-500/40
//                                   hover:scale-110 transition-transform duration-300">
//                     <svg
//                       className="w-8 h-8 text-black ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M6 4l10 6-10 6V4z" />
//                     </svg>
//                   </div>
//                 </button>
//               </>
//             ) : (
//               <iframe
//                 className="w-full h-full rounded-2xl"
//                 src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
//                 title="About Video"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               />
//             )}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default About;


























// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section className="relative py-28
//                         bg-gradient-to-br from-[#0B0F14] via-[#0E1621] to-[#0B0F14]
//                         text-white overflow-hidden">

//       {/* Background Glows */}
//       <div className="absolute top-10 -right-40 w-[600px] h-[600px]
//                       bg-emerald-500/10 rounded-full blur-[140px]" />
//       <div className="absolute bottom-10 -left-40 w-[500px] h-[500px]
//                       bg-teal-400/10 rounded-full blur-[120px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <motion.span
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-block mb-6 px-4 py-1 rounded-full
//                        bg-emerald-500/10 text-emerald-400
//                        text-xs tracking-widest uppercase"
//           >
//             About Us
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
//           >
//             Architecting the{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-400
//                              bg-clip-text text-transparent">
//               Digital Future
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-slate-300 text-lg leading-relaxed mb-6"
//           >
//             We provide website development and custom software solutions
//             designed especially for small businesses. Our mission is to make
//             technology simple, accessible, and growth-driven.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-slate-400 leading-relaxed mb-10"
//           >
//             From billing systems and inventory management to high-performing
//             websites, we build reliable and scalable digital solutions that
//             empower businesses to grow confidently.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-gradient-to-r from-emerald-500 to-teal-500
//                        hover:from-emerald-400 hover:to-teal-400
//                        text-black px-8 py-3 rounded-md
//                        font-semibold transition-all
//                        shadow-lg shadow-emerald-500/30">
//             Learn More →
//           </motion.button>
//         </div>

//         {/* RIGHT SIDE - YOUTUBE VIDEO */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="w-full h-[420px] rounded-2xl
//                           bg-white/5 backdrop-blur-xl
//                           border border-white/10
//                           shadow-2xl overflow-hidden">

//             <iframe
//               className="w-full h-full rounded-2xl"
//               src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//               title="About Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default About;
















// import { useEffect, useRef } from "react";
// import aboutImg from "../assets/AboutImage.jpg";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-fadeUp");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//   }, []);

//   return (
//     <section className="relative bg-gray-50 overflow-hidden py-20 px-6 md:px-16">
      
//       {/* Background Glow */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

//       <div
//         ref={sectionRef}
//         className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center opacity-0 transition-all duration-1000"
//       >
//         {/* LEFT IMAGE */}
//         <div className="relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

//           <img
//             src={aboutImg}
//             alt="About us"
//             className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-700 animate-float"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <h4 className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
//             About Us
//           </h4>

//           <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
//             Architecting the Digital Future
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed mb-6">
//             We provide website development and software solutions for small
//             businesses, including tea stalls and retail shops. Our mission is
//             to make technology accessible and help businesses grow in the
//             digital age.
//           </p>

//           <p className="text-gray-600 text-lg leading-relaxed mb-8">
//             From inventory management and billing systems to modern websites,
//             we build solutions that simplify operations and empower businesses
//             to scale confidently.
//           </p>

//           <button className="relative inline-flex items-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105">
//             <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-700 opacity-0 hover:opacity-100 transition duration-300"></span>
//             <span className="relative z-10">Learn More</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
