import React from "react";
import { motion } from "framer-motion";
import { Users, Cloud, Settings, Rocket } from "lucide-react";

const features = [
  {
    icon: <Users size={36} className="text-blue-600" />,
    title: "Student-Centric Learning",
    desc: "Design engaging and interactive learning experiences focused on student success."
  },
  {
    icon: <Cloud size={36} className="text-blue-600" />,
    title: "Cloud-Enabled Education",
    desc: "Secure, scalable cloud platforms to support growing learning ecosystems."
  },
  {
    icon: <Settings size={36} className="text-blue-600" />,
    title: "Operational Efficiency",
    desc: "Automate academic and administrative processes for better efficiency."
  },
  {
    icon: <Rocket size={36} className="text-blue-600" />,
    title: "Future-Ready Learning",
    desc: "Prepare institutions and learners for the future with modern digital education solutions."
  }
];

const FeatureSlider = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-cyan-600 uppercase tracking-widest mb-2">
            Our Features
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Platform
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {feature.icon}
              <h3 className="text-lg font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
