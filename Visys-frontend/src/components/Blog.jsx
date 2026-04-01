import React from "react";
import { motion } from "framer-motion";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const blogs = [
  {
    img: blog1,
    title: "VPL – Visys Premium League: Prize Distribution & Recognition",
  },
  {
    img: blog2,
    title: "VPL – Visys Premium League: Playing for Happiness & Team Spirit",
  },
  {
    img: blog3,
    title: "Digital Marketing Executive Hiring Drive at SD Hub, Mehdipatnam",
  },
];

const Blogs = () => {
  return (
    <section className="relative w-full py-12 bg-white text-gray-900 overflow-hidden">

      {/* Floating Background Glow */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[420px] h-[420px]
        bg-[#369CA8]/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[350px] h-[350px]
        bg-[#369CA8]/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 px-6 lg:px-24">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Our{" "}
          <span className="text-[#369CA8] relative">
            Blogs
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#369CA8]/40 rounded-full"></span>
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} index={i} />
          ))}

        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-20"
        >
          <button className="px-10 py-3 rounded-xl font-semibold text-white
          bg-[#369CA8] hover:bg-[#2f8791] transition-all shadow-lg hover:scale-105">
            View All Blogs
          </button>
        </motion.div>

      </div>
    </section>
  );
};

/* ================= CARD COMPONENT ================= */

const BlogCard = ({ blog, index }) => {
  const [rotate, setRotate] = React.useState({ rotateX: 0, rotateY: 0 });
  const [light, setLight] = React.useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = ((y / rect.height) - 0.5) * -16;

    setRotate({ rotateX, rotateY });
    setLight({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => setRotate({ rotateX: 0, rotateY: 0 })}
        animate={rotate}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative group bg-white rounded-2xl
        border border-gray-200 shadow-xl overflow-hidden"
      >

        {/* Cursor Light Glow */}
        <div
          className="absolute w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: "#369CA8",
            left: light.x - 80,
            top: light.y - 80,
          }}
        />

        {/* Image */}
        <div className="overflow-hidden h-[230px]">
          <motion.img
            src={blog.img}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Title with Span Highlight */}
          <h3 className="text-lg font-semibold leading-snug mb-4">
            <span className="text-[#369CA8]">Blog:</span> {blog.title}
          </h3>

          {/* Read More */}
          <motion.span
            whileHover={{ x: 8 }}
            className="inline-block text-sm font-medium text-[#369CA8]
            cursor-pointer relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-[#369CA8]
            after:transition-all after:duration-300
            group-hover:after:w-full"
          >
            Read more →
          </motion.span>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default Blogs;





















// import React from "react";
// import { motion } from "framer-motion";

// // Import images from assets
// import blog1 from "../assets/blog1.jpg"; // replace with correct filenames
// import blog2 from "../assets/blog2.jpg";
// import blog3 from "../assets/blog3.jpg";

// const blogs = [
//   {
//     img: blog1,
//     title: "VPL – Visys Premium League: Prize Distribution & Recognition",
//   },
//   {
//     img: blog2,
//     title: "VPL – Visys Premium League: Playing for Happiness & Team Spirit",
//   },
//   {
//     img: blog3,
//     title: "Digital Marketing Executive Hiring Drive at SD Hub, Mehdipatnam",
//   },
// ];

// const cardAnim = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   show: i => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
//   }),
// };

// const Blogs = () => {
//   return (
//     <section className="relative w-full py-32 bg-[#0B0F14] text-white overflow-hidden">

//       {/* decorative glow */}
//       <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full" />

//       <div className="relative z-10 px-6 lg:px-24">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-20"
//         >
//           Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Blogs</span>
//         </motion.h2>

//         {/* Blog Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {blogs.map((blog, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={cardAnim}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.03 }}
//               className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-emerald-400/40 shadow-lg hover:shadow-emerald-500/20"
//             >
//               {/* Image */}
//               <div className="overflow-hidden h-[230px]">
//                 <motion.img
//                   src={blog.img}
//                   alt=""
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.8 }}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <motion.h3
//                   className="text-lg font-semibold leading-snug mb-4 group-hover:text-emerald-400 transition"
//                   initial={{ x: -10, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   {blog.title}
//                 </motion.h3>

//                 {/* Read more */}
//                 <motion.span
//                   whileHover={{ x: 6 }}
//                   className="inline-block text-sm text-emerald-400 cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 group-hover:after:w-full"
//                 >
//                   Read more →
//                 </motion.span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mt-20"
//         >
//           <button className="px-10 py-3 rounded-md font-semibold text-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg hover:scale-105">
//             View All Blogs
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Blogs;
