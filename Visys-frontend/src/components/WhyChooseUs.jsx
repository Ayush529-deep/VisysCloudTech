import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, Rocket } from "lucide-react";

const data = [
  {
    icon: <Lightbulb size={34} />,
    title: "Smart Solutions for Your Business",
    desc: "We use the latest technology to create custom solutions that help your business grow and succeed.",
  },
  {
    icon: <Users size={34} />,
    title: "Skilled Experts, Quality Results",
    desc: "Our experienced team delivers top-quality work with attention to detail and care.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Your Success, Our Priority",
    desc: "We focus on understanding your needs to provide solutions that guarantee satisfaction.",
  },
  {
    icon: <Rocket size={34} />,
    title: "Build Your Career with Us",
    desc: "Join a supportive team where you grow professionally and work on exciting challenges.",
  },
];

const WhyChooseUs = () => {
  const handleMouseMove = (e, setRotate, setLight) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setRotate({ rotateX, rotateY });
    setLight({ x, y });
  };

  return (
    <section className="relative w-full py-28 bg-white text-gray-900 overflow-hidden">

      {/* Floating Background */}
      <motion.div
        animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#369CA8]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#369CA8]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -60, rotateX: 40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Why Businesses Trust Our <br />
          <span className="text-[#369CA8]">Services</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {data.map((item, i) => {

            const [rotate, setRotate] = React.useState({ rotateX: 0, rotateY: 0 });
            const [light, setLight] = React.useState({ x: 0, y: 0 });

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 120, rotateX: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.2, duration: 1 }}
                style={{ perspective: 1500 }}
              >
                <motion.div
                  onMouseMove={(e) => handleMouseMove(e, setRotate, setLight)}
                  onMouseLeave={() => setRotate({ rotateX: 0, rotateY: 0 })}
                  animate={rotate}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  className="relative p-10 rounded-3xl
                  bg-white border border-gray-200 shadow-2xl
                  overflow-hidden"
                >

                  {/* Cursor Light Effect */}
                  <div
                    className="pointer-events-none absolute w-40 h-40 rounded-full blur-3xl opacity-40"
                    style={{
                      background: "#369CA8",
                      left: light.x - 80,
                      top: light.y - 80,
                    }}
                  />

                  {/* Depth Layer */}
                  <motion.div
                    animate={{ z: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ transformStyle: "preserve-3d" }}
                  >

                    {/* Icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="mb-6 w-16 h-16 rounded-2xl
                      bg-[#369CA8]/10 flex items-center justify-center
                      text-[#369CA8]"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4 text-[#369CA8]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </motion.div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;


















// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Users, ShieldCheck, Rocket } from "lucide-react";

// const data = [
//   {
//     icon: <Lightbulb size={34} />,
//     title: "Smart Solutions for Your Business",
//     desc: "We use the latest technology to create custom solutions that help your business grow and succeed.",
//   },
//   {
//     icon: <Users size={34} />,
//     title: "Skilled Experts, Quality Results",
//     desc: "Our experienced team delivers top-quality work with attention to detail and care.",
//   },
//   {
//     icon: <ShieldCheck size={34} />,
//     title: "Your Success, Our Priority",
//     desc: "We focus on understanding your needs to provide solutions that guarantee satisfaction.",
//   },
//   {
//     icon: <Rocket size={34} />,
//     title: "Build Your Career with Us",
//     desc: "Join a supportive team where you grow professionally and work on exciting challenges.",
//   },
// ];

// const WhyChooseUs = () => {

//   const handleMouseMove = (e, setRotate, setLight) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateY = ((x / rect.width) - 0.5) * 20;
//     const rotateX = ((y / rect.height) - 0.5) * -20;

//     setRotate({ rotateX, rotateY });
//     setLight({ x, y });
//   };

//   return (
//     <section className="relative w-full py-2 bg-white text-gray-900 overflow-hidden">

//       {/* Floating Background */}
//       <motion.div
//         animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute top-0 right-0 w-[420px] h-[420px]
//         bg-[#369CA8]/10 rounded-full blur-3xl"
//       />

//       <motion.div
//         animate={{ y: [0, 50, 0], scale: [1, 1.15, 1] }}
//         transition={{ duration: 14, repeat: Infinity }}
//         className="absolute bottom-0 left-0 w-[350px] h-[350px]
//         bg-[#369CA8]/10 rounded-full blur-3xl"
//       />

//       <div className="relative z-10 max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -60, rotateX: 40 }}
//           whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-20"
//         >
//           Why Businesses Trust Our <br />
//           <span className="text-[#369CA8]">Services</span>
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {data.map((item, i) => {

//             const [rotate, setRotate] = React.useState({ rotateX: 0, rotateY: 0 });
//             const [light, setLight] = React.useState({ x: 0, y: 0 });

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 120, rotateX: 50, filter: "blur(10px)" }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
//                 transition={{ delay: i * 0.2, duration: 1 }}
//                 style={{ perspective: 1500 }}
//               >
//                 <motion.div
//                   onMouseMove={(e) => handleMouseMove(e, setRotate, setLight)}
//                   onMouseLeave={() => setRotate({ rotateX: 0, rotateY: 0 })}
//                   animate={rotate}
//                   transition={{ type: "spring", stiffness: 140, damping: 18 }}
//                   className="relative p-10 rounded-3xl
//                   bg-white border border-gray-200 shadow-2xl
//                   overflow-hidden"
//                 >

//                   {/* Cursor Light Effect */}
//                   <div
//                     className="pointer-events-none absolute w-40 h-40 rounded-full blur-3xl opacity-40"
//                     style={{
//                       background: "#369CA8",
//                       left: light.x - 80,
//                       top: light.y - 80,
//                     }}
//                   />

//                   {/* Depth Layer */}
//                   <motion.div
//                     animate={{ z: [0, 30, 0] }}
//                     transition={{ duration: 5, repeat: Infinity }}
//                     style={{ transformStyle: "preserve-3d" }}
//                   >

//                     {/* Icon */}
//                     <motion.div
//                       animate={{ y: [0, -8, 0] }}
//                       transition={{ duration: 4, repeat: Infinity }}
//                       className="mb-6 w-16 h-16 rounded-2xl
//                       bg-[#369CA8]/10 flex items-center justify-center
//                       text-[#369CA8]"
//                     >
//                       {item.icon}
//                     </motion.div>

//                     {/* Title */}
//                     <h3 className="text-xl font-semibold mb-4">
//                       {item.title.split(" ").map((word, idx) =>
//                         idx === 0 ? (
//                           <span key={idx} className="text-[#369CA8] mr-1">
//                             {word}
//                           </span>
//                         ) : (
//                           word + " "
//                         )
//                       )}
//                     </h3>

//                     {/* Desc */}
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>

//                   </motion.div>

//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;






















// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Users, ShieldCheck, Rocket } from "lucide-react";

// const data = [
//   {
//     icon: <Lightbulb size={34} />,
//     title: "Smart Solutions for Your Business",
//     desc: "We use the latest technology to create custom solutions that help your business grow and succeed.",
//   },
//   {
//     icon: <Users size={34} />,
//     title: "Skilled Experts, Quality Results",
//     desc: "Our experienced team delivers top-quality work with attention to detail and care.",
//   },
//   {
//     icon: <ShieldCheck size={34} />,
//     title: "Your Success, Our Priority",
//     desc: "We focus on understanding your needs to provide solutions that guarantee satisfaction.",
//   },
//   {
//     icon: <Rocket size={34} />,
//     title: "Build Your Career with Us",
//     desc: "Join a supportive team where you grow professionally and work on exciting challenges.",
//   },
// ];

// const WhyChooseUs = () => {

//   const handleMouseMove = (e, setRotate) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateY = ((x / rect.width) - 0.5) * 18;
//     const rotateX = ((y / rect.height) - 0.5) * -18;

//     setRotate({ rotateX, rotateY });
//   };

//   return (
//     <section className="relative w-full py-2 bg-white text-gray-900 overflow-hidden">

//       {/* Floating Background */}
//       <motion.div
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute top-0 right-0 w-[420px] h-[420px]
//         bg-[#369CA8]/10 rounded-full blur-3xl"
//       />

//       <motion.div
//         animate={{ y: [0, 40, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute bottom-0 left-0 w-[350px] h-[350px]
//         bg-[#369CA8]/10 rounded-full blur-3xl"
//       />

//       <div className="relative z-10 max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-20"
//         >
//           Why Businesses Trust Our <br />
//           <span className="text-[#369CA8]">Services</span>
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {data.map((item, i) => {
//             const [rotate, setRotate] = React.useState({ rotateX: 0, rotateY: 0 });

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 80, scale: 0.8 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ delay: i * 0.2, duration: 0.8 }}
//                 style={{ perspective: 1200 }}
//                 className="group"
//               >
//                 <motion.div
//                   onMouseMove={(e) => handleMouseMove(e, setRotate)}
//                   onMouseLeave={() => setRotate({ rotateX: 0, rotateY: 0 })}
//                   animate={rotate}
//                   transition={{ type: "spring", stiffness: 120, damping: 15 }}
//                   className="relative p-10 rounded-3xl
//                   bg-white border border-gray-200 shadow-xl
//                   transition-all duration-300"
//                 >

//                   {/* Floating Depth Layer */}
//                   <motion.div
//                     animate={{ y: [0, -6, 0] }}
//                     transition={{ duration: 4, repeat: Infinity }}
//                     className="relative z-10"
//                   >

//                     {/* Icon */}
//                     <div className="mb-6 w-16 h-16 rounded-2xl
//                     bg-[#369CA8]/10 flex items-center justify-center
//                     text-[#369CA8]">
//                       {item.icon}
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-xl font-semibold mb-4">
//                       {item.title.split(" ").map((word, idx) =>
//                         idx === 0 ? (
//                           <span key={idx} className="text-[#369CA8] mr-1">
//                             {word}
//                           </span>
//                         ) : (
//                           word + " "
//                         )
//                       )}
//                     </h3>

//                     {/* Desc */}
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>

//                   </motion.div>

//                   {/* Light Hover Layer */}
//                   <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
//                   bg-gradient-to-br from-[#369CA8]/10 to-transparent" />

//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
































// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Users, ShieldCheck, Rocket } from "lucide-react";

// const data = [
//   {
//     icon: <Lightbulb size={34} />,
//     title: "Smart Solutions for Your Business",
//     desc: "We use the latest technology to create custom solutions that help your business grow and succeed.",
//   },
//   {
//     icon: <Users size={34} />,
//     title: "Skilled Experts, Quality Results",
//     desc: "Our experienced team delivers top-quality work with attention to detail and care.",
//   },
//   {
//     icon: <ShieldCheck size={34} />,
//     title: "Your Success, Our Priority",
//     desc: "We focus on understanding your needs to provide solutions that guarantee satisfaction.",
//   },
//   {
//     icon: <Rocket size={34} />,
//     title: "Build Your Career with Us",
//     desc: "Join a supportive team where you grow professionally and work on exciting challenges.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="relative w-full py-32 bg-gradient-to-br from-[#0B0F14] via-[#0E1621] to-[#0B0F14] text-white overflow-hidden">

//       {/* ambient glow */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[160px] rounded-full" />

//       <div className="relative z-10 w-full px-6 lg:px-28">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-28"
//         >
//           Why Businesses Trust Our <br />
//           <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
//             Services
//           </span>
//         </motion.h2>

//         {/* timeline */}
//         <div className="relative max-w-5xl mx-auto">

//           {/* center line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400/40 via-teal-400/30 to-transparent hidden md:block" />

//           {data.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className={`relative mb-24 flex flex-col md:flex-row ${
//                 i % 2 === 0 ? "md:justify-start" : "md:justify-end"
//               }`}
//             >
//               {/* dot */}
//               <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-emerald-400 rounded-full hidden md:block shadow-[0_0_25px_rgba(52,211,153,0.6)]" />

//               {/* card */}
//               <div className="md:w-[46%] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-500 shadow-lg">
//                 <div className="flex items-center gap-4 mb-4 text-emerald-400">
//                   {item.icon}
//                   <h3 className="text-lg font-semibold">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <p className="text-slate-300 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
