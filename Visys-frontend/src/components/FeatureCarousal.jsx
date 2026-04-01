import React from "react";
import { motion } from "framer-motion";
import { Users, Cloud, Settings, Rocket } from "lucide-react";

const features = [
  {
    icon: <Users size={36} className="text-blue-600" />,
    title: "User Experience Optimization",
    desc: "We focus on improving user experience (UX) and user interface (UI) design, ensuring your website is intuitive and user-friendly.",
  },
  {
    icon: <Cloud size={36} className="text-blue-600" />,
    title: "Cloud Solutions",
    desc: "Enhance your digital presence with seamless UI/UX design that improves customer interactions and engagement.",
  },
  {
    icon: <Settings size={36} className="text-blue-600" />,
    title: "Website Maintenance",
    desc: "Keep your website up-to-date and secure with regular updates, security patches, and optimizations.",
  },
  {
    icon: <Rocket size={36} className="text-blue-600" />,
    title: "Digital Marketing Solutions",
    desc: "Boost your online growth with SEO, social media marketing, and paid ads to improve brand visibility.",
  }
];

// Container for staggered animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card entrance + floating animation
const card = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotate: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// Floating effect on hover
const hoverEffect = {
  scale: 1.08,
  rotate: [0, 2, -2, 0], // subtle rotation animation
  y: [0, -5, 0], // small bounce
  transition: { duration: 0.6, ease: "easeInOut" },
};

// Icon animation
const iconAnimation = {
  animate: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  }
};

const FeatureCarousal = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={hoverEffect}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Animated Icon */}
            <motion.div {...iconAnimation}>
              {feature.icon}
            </motion.div>

            <h3 className="text-lg font-bold mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureCarousal;
