import React from "react";
import { motion } from "framer-motion";
import aiImage from "../assets/ai4mahila.png"; // Replace with your AI-related image
import cloudImage from "../assets/cloudLogo.png"; // Replace with cloud/kids image

const Innovation = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#369CA8" }}
          >
            Empowering the Future with{" "}
            <span style={{ color: "#369CA8" }}>Innovation</span>
          </h2>

          <br/>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <strong>Visys Cloud Technologies</strong>, we are dedicated to
            harnessing the power of <strong>Artificial Intelligence</strong>,{" "}
            <strong>Cloud Computing</strong>, and
            <strong> Digital Transformation</strong> to drive impactful change.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We take pride in our innovative products—<strong>AI4Mahila</strong>,
            and
            <strong> Cloud4CoolKids</strong>—each designed to empower different
            sectors of society through cutting-edge solutions.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            With the continuous advancement in technology, enterprises have
            changed the way they do business.
            <strong>Visys Cloud Technologies</strong> aims at helping
            organizations gain a competitive edge by leveraging new technologies
            to drive innovation, manage scalability, and explore new markets.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            With a singular focus on{" "}
            <strong>Mobile, Cloud and Social technologies</strong>, we help you
            accelerate business transformation through a{" "}
            <strong>smart, secure, and connected experience</strong> across
            Enterprise Platforms, Consumer Solutions, Data center Technologies
            and Internet of Things through a<strong> CONSTANT ACCESS</strong>{" "}
            paradigm.
          </p>
        </motion.div>

        {/* Images with animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex-1 flex flex-col gap-8"
        >
          <img
            src={aiImage}
            alt="AI Technology"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <br />
          <br />
          <img
            src={cloudImage}
            alt="Cloud Technology"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Floating animated shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200 rounded-full opacity-40 blur-3xl"
      />
    </section>
  );
};

export default Innovation;
