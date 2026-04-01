import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "../assets/intern.jpg";
import img2 from "../assets/growth.jpg";
import img3 from "../assets/work.webp";

const sections = [
  {
    img: img1,
    desc: "At VISYS CLOUD TECHNOLOGIES, we offer a variety of internship opportunities across different departments including Web Development, UI/UX Design, Marketing, and more. Our internship program is designed to provide hands-on experience, mentorship, and a real-world understanding of the tech industry."
  },
  {
    img: img2,
    desc: "Interns at VISYS CLOUD TECHNOLOGIES are given access to training materials, workshops, and industry professionals. You’ll learn new skills, improve your technical knowledge, and gain insight into the day-to-day work of technology professionals."
  },
  {
    img: img3,
    desc: "As an intern, you’ll be working closely with cross-functional teams including developers, designers, and project managers. This collaborative work environment helps you understand the importance of teamwork and communication in the development process."
  }
];

const Internship = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const isReverse = index % 2 === 1;

  return (
    <section className="w-full min-h-[75vh] bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center px-2 md:px-4 py-16">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        What You Will Experience During the{" "}
        <span className="text-indigo-600">Internship</span>
      </h2>

      {/* Content Wrapper - Almost Full Width */}
      <div className="w-full max-w-[95%] mx-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              isReverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            {/* TEXT */}
            <motion.div
              initial={{ x: isReverse ? 80 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isReverse ? -80 : 80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {sections[index].desc}
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ x: isReverse ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isReverse ? 80 : -80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src={sections[index].img}
                alt="Internship"
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

export default Internship;
