import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, Code2, Headphones, Rocket } from "lucide-react";

const services = [
  {
    title: "UI / UX Designer",
    desc: "Designing seamless user interfaces and engaging digital experiences.",
    icon: Monitor,
  },
  {
    title: "Web Development",
    desc: "Building scalable, responsive and high performance websites.",
    icon: Code2,
  },
  {
    title: "IT Support",
    desc: "Providing secure, fast and reliable IT infrastructure support.",
    icon: Headphones,
  },
  {
    title: "Deployment",
    desc: "Smooth system deployment and integration solutions.",
    icon: Rocket,
  },
  {
    title: "Cloud Architect",
    desc: "Designing secure and scalable cloud infrastructures.",
    icon: Rocket,
  },
  {
    title: "BPO Services",
    desc: "Efficient outsourcing and customer management solutions.",
    icon: Headphones,
  },
  {
    title: "AI Services",
    desc: "AI automation, ML solutions and smart data analytics.",
    icon: Code2,
  },
  {
    title: "Internship Services",
    desc: "Real world training programs for students and developers.",
    icon: Code2,
  },
];

const Services = () => {
  const sliderRef = useRef();

  return (
    <section className="relative py-18 bg-white overflow-hidden">

      {/* Floating Background Animation */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#369CA8]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-center text-4xl font-bold mb-16">
          Services We Provide <br /> <br/>
          <span className="text-[#369CA8]">
            Success is linked between us and our clients.
          </span>
        </h3>

        {/* Carousel */}
        <motion.div
          ref={sliderRef}
          className="overflow-hidden cursor-grab"
        >
          <motion.div
            drag="x"
            dragConstraints={sliderRef}
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...services, ...services].map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -15,
                    scale: 1.05
                  }}
                  className="min-w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="mb-6 w-14 h-14 rounded-xl bg-[#369CA8]/10 flex items-center justify-center"
                  >
                    <Icon className="text-[#369CA8] w-7 h-7" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-4 text-[#369CA8]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">
                    {service.desc}
                  </p>

                  {/* Link */}
                  <span className="text-[#369CA8] font-semibold text-sm">
                    Read More →
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;





















// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Monitor,
//   Code2,
//   Headphones,
//   Rocket
// } from "lucide-react";

// const services = [
//   {
//     title: "UI / UX Designer",
//     desc: "Designing seamless user interfaces and engaging digital experiences.",
//     icon: Monitor,
//   },
//   {
//     title: "Web Development",
//     desc: "Building scalable, responsive and high performance websites.",
//     icon: Code2,
//   },
//   {
//     title: "IT Support",
//     desc: "Providing secure, fast and reliable IT infrastructure support.",
//     icon: Headphones,
//   },
//   {
//     title: "Deployment",
//     desc: "Smooth system deployment and integration solutions.",
//     icon: Rocket,
//   },
//   {
//     title: "Cloud Architect",
//     desc: "Designing secure and scalable cloud infrastructures.",
//     icon: Rocket,
//   },
//   {
//     title: "BPO Services",
//     desc: "Efficient outsourcing and customer management solutions.",
//     icon: Headphones,
//   },
//   {
//     title: "AI Services",
//     desc: "AI automation, ML solutions and smart data analytics.",
//     icon: Code2,
//   },
//   {
//     title: "Internship Services",
//     desc: "Real world training programs for students and developers.",
//     icon: Code2,
//   },
// ];

// const Services = () => {
//   const sliderRef = useRef();

//   return (
//     <section className="relative py-28 bg-white overflow-hidden">

//       {/* Floating Background Animation */}
//       <motion.div
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute top-0 right-0 w-[400px] h-[400px]
//         bg-[#369CA8]/10 rounded-full blur-3xl"
//       />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h3 className="text-center text-4xl font-bold mb-16">
//           Services We Provide <br /> <br/>
//           <span className="text-[#369CA8]">Success is linked between us and our clients.</span>
//         </h3>

//         {/* Carousel */}
//         <motion.div
//           ref={sliderRef}
//           className="overflow-hidden cursor-grab"
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={sliderRef}
//             className="flex gap-8"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           >
//             {[...services, ...services].map((service, i) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={i}
//                   whileHover={{
//                     y: -15,
//                     scale: 1.05
//                   }}
//                   className="min-w-[300px] max-w-[300px]
//                   bg-white border border-gray-200
//                   rounded-2xl p-8 shadow-lg hover:shadow-2xl
//                   transition-all duration-500"
//                 >
//                   {/* Icon */}
//                   <motion.div
//                     whileHover={{ rotate: 15, scale: 1.2 }}
//                     className="mb-6 w-14 h-14 rounded-xl
//                     bg-[#369CA8]/10 flex items-center justify-center"
//                   >
//                     <Icon className="text-[#369CA8] w-7 h-7" />
//                   </motion.div>

//                   {/* Title */}
//                   <h3 className="text-lg font-semibold mb-4">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 text-sm mb-6">
//                     {service.desc}
//                   </p>

//                   {/* Link */}
//                   <span className="text-[#369CA8] font-semibold text-sm">
//                     Read More →
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;





























// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Monitor,
//   Code2,
//   Headphones,
//   Rocket
// } from "lucide-react";

// const services = [
//   {
//     title: "UI / UX Designer",
//     desc:
//       "Designing seamless, user-friendly interfaces that enhance engagement and usability, turning ideas into visually compelling experiences that captivate and convert them into real websites.",
//     icon: Monitor,
//   },
//   {
//     title: "Web Development",
//     desc:
//       "Building high-performance, responsive websites that deliver seamless user experiences, transforming ideas into dynamic, scalable, and visually stunning web solutions.",
//     icon: Code2,
//   },
//   {
//     title: "IT Support",
//     desc:
//       "Offering proactive IT support to ensure your systems run efficiently and securely, providing quick resolutions to technical issues while minimizing downtime.",
//     icon: Headphones,
//   },
//   {
//     title: "Deployment",
//     desc:
//       "Streamlining the deployment of IT solutions with minimal disruption, ensuring smooth installation, configuration, and system integration for your business needs.",
//     icon: Rocket,
//   },
//   {
//     title: "CLOUD ARCHITECT",
//     desc:
//       "Designing scalable, secure, and high-performance cloud solutions tailored to your business needs. Enabling seamless migration, management, and optimization of cloud infrastructure.",
//     icon: Rocket,
//   },
//   {
//     title: "BPO SERVICES",
//     desc:
//       "Delivering cost-effective and efficient business process outsourcing solutions for enhanced productivity. Streamlining operations with expert customer support, data management services.",
//     icon: Headphones,
//   },
//   {
//     title: "AI SERVICES",
//     desc:
//       "Developing intelligent AI solutions to automate processes, enhance decision-making, and drive innovation. Leveraging machine learning, NLP, and data analytics to optimize business operations.",
//     icon: Code2,
//   },
//   {
//     title: "INTERNSHIP SERVICES",
//     desc:
//       "Developing intelligent AI solutions to automate processes, enhance decision-making, and drive innovation. Leveraging machine learning, NLP, and data analytics to optimize business operations.",
//     icon: Code2,
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6 },
//   }),
// };

// const Services = () => {
//   return (
//     <section className="relative py-28 bg-[#0B0F14] text-white overflow-hidden">

//       {/* background glow */}
//       <div className="absolute -top-40 right-0 w-[500px] h-[500px]
//                       bg-emerald-500/10 blur-[140px] rounded-full" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-sm tracking-widest
//                      text-emerald-400 uppercase mb-4"
//         >
//           Services We Provide
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center text-3xl md:text-4xl font-bold mb-16"
//         >
//           Success is linked between us <br />
//           <span className="text-emerald-400">and our clients.</span>
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.title}
//                 custom={i}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ y: -12 }}
//                 className="group relative p-8 rounded-2xl
//                            bg-white/5 backdrop-blur-xl
//                            border border-white/10
//                            hover:border-emerald-400/40
//                            transition-all duration-300"
//               >
//                 {/* Icon */}
//                 <div className="mb-6 w-14 h-14 rounded-xl
//                                 bg-gradient-to-br from-emerald-500/20 to-teal-500/20
//                                 flex items-center justify-center
//                                 group-hover:scale-110 transition">
//                   <Icon className="text-emerald-400 w-7 h-7" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold mb-4">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-slate-300 leading-relaxed mb-6">
//                   {service.desc}
//                 </p>

//                 {/* Link */}
//                 <span className="text-emerald-400 text-sm font-medium
//                                  group-hover:underline cursor-pointer">
//                   Read more →
//                 </span>

//                 {/* Hover glow */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0
//                                 group-hover:opacity-100 transition
//                                 bg-gradient-to-br from-emerald-500/10 to-transparent" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
