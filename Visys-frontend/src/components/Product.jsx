import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import bgImage from "../assets/abhishek.jpg";

const skillsData = [
  { name: "GRAPHIC DESIGN", level: 99 },
  { name: "PRINT MEDIA AND COMMUNICATION", level: 95 },
  { name: "WEB BASED GRAPHIC DESIGN", level: 97 },
  { name: "BRANDING", level: 99 },
  { name: "LOGO DESIGN", level: 96 },
];

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [skills, setSkills] = useState(
    skillsData.map(skill => ({ ...skill, progress: 0 }))
  );

  // 👉 Start progress only when section visible
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setSkills(prev =>
        prev.map(skill => ({
          ...skill,
          progress:
            skill.progress < skill.level
              ? skill.progress + 1
              : skill.progress,
        }))
      );
    }, 20);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative py-20 px-5 md:px-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10 text-gray-100"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#6EC1E4] mb-4">
              AI4Mahila – Empowering Women with AI
            </h2>
            <p>
              We were established in 1990 as a small graphic designing company
              with the aim of being the best in Vadodara...
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#6EC1E4] mb-4">
              Cloud4CoolKids – Cloud Computing for Young Innovators
            </h2>
            <p>
              We not only reached our aim of being the best in Gujarat...
            </p>
          </div>
        </motion.div>

        {/* RIGHT SKILLS */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-[#6EC1E4] mb-6">
            Our Skills
          </h2>

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between font-semibold text-gray-100">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden relative">
                {/* Animated Progress Bar */}
                <motion.div
                  className="h-5 rounded-full bg-gradient-to-r from-[#369CA8] to-[#6EC1E4] relative"
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  {/* 🔥 Floating White Dot Animation (Old Effect Back) */}
                  <motion.div
                    className="absolute w-3 h-3 bg-white rounded-full top-1/2 -translate-y-1/2 shadow-lg"
                    style={{ right: "-6px" }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-[#369CA8] rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-[#369CA8] rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </section>
  );
};

export default Product;

















































// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import bgImage from "../assets/abhishek.jpg"; // <-- Change this path to your new image

// const skillsData = [
//   { name: "GRAPHIC DESIGN", level: 99 },
//   { name: "PRINT MEDIA AND COMMUNICATION", level: 95 },
//   { name: "WEB BASED GRAPHIC DESIGN", level: 97 },
//   { name: "BRANDING", level: 99 },
//   { name: "LOGO DESIGN", level: 96 },
// ];

// const Product = () => {
//   const [skills, setSkills] = useState(
//     skillsData.map(skill => ({ ...skill, progress: 0 }))
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSkills(prev =>
//         prev.map(skill => ({
//           ...skill,
//           progress: skill.progress < skill.level ? skill.progress + 1 : skill.progress,
//         }))
//       );
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative py-20 px-5 md:px-20 overflow-hidden"
//     >
//       {/* Background image with dark + blur filter */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         //   filter: "brightness(0.4) blur(2px)",
//           zIndex: 0,
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-white">

//         {/* History & Present */}
//         <div className="space-y-10 text-gray-100">
//           <div>
//             <h2 className="text-3xl font-bold text-[#6EC1E4] mb-4">
//               AI4Mahila – Empowering Women with AI
//             </h2>
//             <p className="leading-relaxed">
//               We were established in 1990 as a small graphic designing company with the aim of being
//               the best in Vadodara. With the same stride we kept going forward to reach where we are
//               today. We take pride in giving our clients the very best possible solution for their
//               designing needs and provide great service that fits any budget. We offer a wide range of
//               solutions for nearly any type of business from full brand development to a monthly
//               graphic design and big hoarding design contract.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-[#6EC1E4] mb-4">
//               Cloud4CoolKids – Cloud Computing for Young Innovators
//             </h2>
//             <p className="leading-relaxed">
//               We not only reached our aim of being the best in Vadodara but also achieved the target
//               of being the best in Gujarat. On our journey we picked up the idea of MAKE IN INDIA
//               and made it our motto. Today we are a part of the Make In India campaign and most of our
//               staff and product is produced in India by hardworking Indians. From 2003 to 2007 we
//               mainly focused on the Indian market and worked with outer state.
//             </p>
//           </div>
//         </div>

//         {/* Skills with Creative Animations */}
//         <div className="space-y-10">
//           <h2 className="text-3xl font-bold text-[#6EC1E4] mb-6">Our Skills</h2>

//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.2, type: "spring", stiffness: 80 }}
//               className="space-y-2"
//             >
//               <div className="flex justify-between font-semibold text-gray-100">
//                 <span>{skill.name}</span>
//                 <span>{skill.progress}%</span>
//               </div>

//               <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden relative">
//                 {/* Animated bar */}
//                 <motion.div
//                   className="h-5 rounded-full bg-gradient-to-r from-[#369CA8] to-[#6EC1E4] relative"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${skill.progress}%` }}
//                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
//                 >
//                   {/* Floating dots along bar */}
//                   <motion.div
//                     className="absolute w-3 h-3 bg-white rounded-full top-1/2 -translate-y-1/2"
//                     style={{ left: `${skill.progress}%` }}
//                     animate={{ y: [0, -5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Background floating blurred shapes */}
//       <motion.div
//         className="absolute top-10 left-10 w-24 h-24 bg-[#369CA8] rounded-full opacity-30 blur-3xl"
//         animate={{ y: [0, 15, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-32 h-32 bg-[#369CA8] rounded-full opacity-20 blur-3xl"
//         animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//       />
//     </section>
//   );
// };

// export default Product;
