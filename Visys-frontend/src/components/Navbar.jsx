import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 👇 YouTube embed link (watch wala nahi)
  const demoVideo = "https://www.youtube.com/embed/FYKWhR8yfK8?autoplay=1";

  const menu = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/company" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#142755] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="VISYS" className="h-9 w-auto object-contain" />
          </NavLink>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
            {menu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="hover:text-[#369CA8] transition-all duration-300"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-[#1F6F78] to-[#369CA8]
                       hover:from-[#2C8E98] hover:to-[#4AB8C3]
                       text-white px-6 py-2 rounded-md
                       text-sm font-semibold
                       shadow-lg shadow-[#1F6F78]/30 transition-all"
          >
            Get a Demo →
          </motion.button>
        </div>
      </motion.nav>

      {/* 🔥 VIDEO MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
          >
            {/* Close on background click */}
            <div
              className="absolute inset-0"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] md:w-[800px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-white bg-black/50 px-3 py-1 rounded-full hover:bg-red-600 transition"
              >
                ✕
              </button>

              {/* YouTube Embed */}
              <iframe
                width="100%"
                height="100%"
                src={demoVideo}
                title="Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;





































// import React from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.png";

// const Navbar = () => {

//   // 👉 Yaha apna YouTube link daal dena
//   const demoLink = "https://www.youtube.com/watch?v=FYKWhR8yfK8&t=24s";

//   const menu = [
//     { name: "Home", path: "/" },
//     { name: "Company", path: "/company" },
//     { name: "Products", path: "/products" },
//     { name: "Industries", path: "/industries" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full z-50
//                  bg-[#142755]
//                  border-b border-white/10"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <NavLink to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="VISYS"
//             className="h-9 w-auto object-contain"
//           />
//         </NavLink>

//         {/* Menu */}
//         <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
//           {menu.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className="relative transition-all duration-300 hover:text-[#369CA8]"
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* CTA - YouTube Link */}
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <a
//             href={demoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               bg-gradient-to-r from-[#1F6F78] to-[#369CA8]
//               hover:from-[#2C8E98] hover:to-[#4AB8C3]
//               text-white px-6 py-2 rounded-md
//               text-sm font-semibold
//               shadow-lg shadow-[#1F6F78]/30
//               transition-all
//             "
//           >
//             Get a Demo →
//           </a>
//         </motion.div>

//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





































