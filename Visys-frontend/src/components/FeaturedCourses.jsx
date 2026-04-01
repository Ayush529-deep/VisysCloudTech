import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    img: "https://cloud4coolkids.com/assets/images/course/thumb/2024101511390887-course-thumb.jpg",
    title: "Linux, Python, Cloud & AI",
    price: 35
  },
  {
    img: "https://cloud4coolkids.com/assets/images/course/thumb/2024082912465534-course-thumb.jpg",
    title: "Linux, Java, Cloud & AI",
    price: 399
  },
  {
    img: "https://cloud4coolkids.com/assets/images/course/thumb/2024082915151298-course-thumb.jpg",
    title: "Engineering Cloud Program",
    price: 599
  },
  {
    img: "https://cloud4coolkids.com/assets/images/course/thumb/2024092111360375-course-thumb.jpg",
    title: "Python Cloud Engineering",
    price: 249
  }
];

const FeaturedCourses = () => {
  const [rotation, setRotation] = useState(0);

  // AUTO ROTATE
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r - 360 / courses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-14 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <p className="text-sm tracking-widest text-cyan-600 uppercase mb-2">
          Find Your Best Suitable Course
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-20">
          Featured Courses
        </h2>
        <br/>
        <br/>

        {/* 3D ROOM */}
        <div className="relative h-[420px] flex items-center justify-center perspective-[1200px]">

          {/* ROTATING CUBE */}
          <motion.div
            animate={{ rotateY: rotation }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-[320px] h-[320px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {courses.map((course, i) => {
              const angle = (360 / courses.length) * i;

              return (
                <div
                  key={i}
                  className="absolute w-[230px] h-[290px] bg-white
                             rounded-2xl shadow-2xl overflow-hidden border"
                  style={{
                    transform: `
                      rotateY(${angle}deg)
                      translateZ(420px)
                    `
                  }}
                >
                  <img
                    src={course.img}
                    alt=""
                    className="w-full h-[160px] object-cover"
                  />

                  <div className="p-4 text-left">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">
                      {course.title}
                    </h4>
                    <p className="text-cyan-600 font-semibold mb-3">
                      ${course.price}
                    </p>
                    <button className="w-full py-2 rounded-lg
                                       bg-gradient-to-r from-cyan-600 to-indigo-600
                                       text-white text-sm">
                      Go to course
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;










































// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const courses = [
//   {
//     img: "https://cloud4coolkids.com/assets/images/course/thumb/2024101511390887-course-thumb.jpg",
//     title: "Linux, Python, Cloud & AI",
//     price: 35
//   },
//   {
//     img: "https://cloud4coolkids.com/assets/images/course/thumb/2024082912465534-course-thumb.jpg",
//     title: "Linux, Java, Cloud & AI",
//     price: 399
//   },
//   {
//     img: "https://cloud4coolkids.com/assets/images/course/thumb/2024082915151298-course-thumb.jpg",
//     title: "Engineering Cloud Program",
//     price: 599
//   },
//   {
//     img: "https://cloud4coolkids.com/assets/images/course/thumb/2024092111360375-course-thumb.jpg",
//     title: "Python Cloud Engineering",
//     price: 249
//   }
// ];

// const FeaturedCourses = () => {
//   const [rotation, setRotation] = useState(0);

//   // AUTO ROTATE (room feeling)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((r) => r - 360 / courses.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   const rotateLeft = () =>
//     setRotation((r) => r + 360 / courses.length);

//   const rotateRight = () =>
//     setRotation((r) => r - 360 / courses.length);

//   return (
//     <section className="w-full py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* HEADER */}
//         <p className="text-sm tracking-widest text-cyan-600 uppercase mb-2">
//           Find Your Best Suitable Course
//         </p>
//         <h2 className="text-4xl font-bold text-gray-900 mb-20">
//           Featured Courses
//         </h2>

//         {/* 3D ROOM */}
//         <div className="relative h-[500px] flex items-center justify-center perspective-[1400px]">

//           {/* ROTATING ROOM */}
//           <motion.div
//             animate={{ rotateY: rotation }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="relative w-[400px] h-[400px]"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {courses.map((course, i) => {
//               const angle = (360 / courses.length) * i;

//               return (
//                 <div
//                   key={i}
//                   className="absolute w-[300px] h-[360px] bg-white rounded-3xl
//                              shadow-2xl overflow-hidden border"
//                   style={{
//                     transform: `
//                       rotateY(${angle}deg)
//                       translateZ(520px)
//                     `
//                   }}
//                 >
//                   <img
//                     src={course.img}
//                     alt=""
//                     className="w-full h-[220px] object-cover"
//                   />

//                   <div className="p-5 text-left">
//                     <h4 className="font-bold text-gray-800 mb-2">
//                       {course.title}
//                     </h4>
//                     <p className="text-cyan-600 font-semibold mb-4">
//                       ${course.price}
//                     </p>
//                     <button className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white">
//                       Go to course
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>

//           {/* CONTROLS */}
//           <button
//             onClick={rotateLeft}
//             className="absolute left-10 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
//           >
//             <ChevronLeft className="text-cyan-600" />
//           </button>

//           <button
//             onClick={rotateRight}
//             className="absolute right-10 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
//           >
//             <ChevronRight className="text-cyan-600" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCourses;
