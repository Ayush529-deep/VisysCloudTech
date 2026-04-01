import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image imports
import img1 from "../assets/learning.jpg";
import img2 from "../assets/student.png";
import img3 from "../assets/Virtual.png";

const slides = [
  {
    img: img1,
    desc: "We design and develop interactive e-learning platforms that support self-paced, instructor-led, and hybrid learning models, ensuring an engaging and accessible digital learning experience."
  },
  {
    img: img2,
    desc: "Our centralized student management systems streamline admissions, attendance, assessments, and academic records for institutions of all sizes."
  },
  {
    img: img3,
    desc: "Enable live and recorded virtual classrooms with seamless collaboration tools, ensuring uninterrupted learning anytime, anywhere."
  }
];

const Education = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const isReverse = current % 2 === 1;

  return (
    <section className="w-full min-h-[75vh] bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center px-2 md:px-4 py-12">

      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Education Technology{" "}
        <span className="text-indigo-600">Capabilities</span>
      </h3>

      {/* Content Wrapper */}
      <div className="w-full max-w-[95%] mx-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={`flex flex-col md:flex-row ${
              isReverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* TEXT */}
            <motion.div
              initial={{ x: isReverse ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isReverse ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {slides[current].desc}
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ x: isReverse ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isReverse ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src={slides[current].img}
                alt="Education slide"
                className="rounded-2xl shadow-xl 
                           w-[90%] md:w-[80%] 
                           max-h-[350px] 
                           object-cover"
              />
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;







































// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Image imports
// import img1 from "../assets/learning.jpg";
// import img2 from "../assets/student.png";
// import img3 from "../assets/Virtual.png";

// // Slider data
// const slides = [
//   {
//     img: img1,
//     desc: "We design and develop interactive e-learning platforms that support self-paced, instructor-led, and hybrid learning models, ensuring an engaging and accessible digital learning experience."
//   },
//   {
//     img: img2,
//     desc: "Our centralized student management systems streamline admissions, attendance, assessments, and academic records for institutions of all sizes."
//   },
//   {
//     img: img3,
//     desc: "Enable live and recorded virtual classrooms with seamless collaboration tools, ensuring uninterrupted learning anytime, anywhere."
//   }
// ];

// const Education = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(prev => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center px-6 py-12">
      
//       {/* Centered Heading */}
//       <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
//         Our Education Technology <span className="text-indigo-600">Capabilities</span>
//       </h3>

//       <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 max-w-[90%]">
        
//         {/* Left Paragraph (vertically centered + animated) */}
//         <motion.div
//           className="md:w-5/12 flex flex-col justify-center"
//           key={current} 
//           initial={{ opacity: 0, x: -50, scale: 0.95 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           exit={{ opacity: 0, x: -50, scale: 0.95 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
//             {slides[current].desc}
//           </p>
//         </motion.div>

//         {/* Right Image (smaller than before) */}
//         <motion.div
//           className="md:w-7/12 flex justify-end"
//         >
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={slides[current].img}
//               src={slides[current].img}
//               alt="Education slide"
//               className="rounded-2xl shadow-2xl w-full max-w-xl object-cover" // max-w-2xl → max-w-xl
//               initial={{ opacity: 0, x: 50, scale: 0.95 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               exit={{ opacity: 0, x: -50, scale: 0.95 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//             />
//           </AnimatePresence>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Education;
