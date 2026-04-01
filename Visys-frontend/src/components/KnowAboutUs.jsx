import React from "react";
import { motion } from "framer-motion";

const KnowAboutUs = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* CONTENT (LEFT) */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                We Equip Your Child with Education Beyond Schools!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-cyan-600 font-semibold uppercase tracking-widest mb-8"
              >
                Know About Us
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-6 text-gray-700 leading-relaxed text-lg"
              >
                <p>
                  Cloud4coolkids promotes access to education with quality
                  instruction. Our scientifically produced, kid-focused courses
                  assist learners 11 years old and older in cultivating technical
                  skills and reaching their full potential.
                </p>

                <p>
                  We offer an integrated cloud-based learning management system
                  that enables children to take various courses and master cloud
                  computing, machine learning, Python, Unix, and Linux.
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Cloud 4 Cool Kids
                  </span>{" "}
                  is a product of{" "}
                  <a
                    href="https://visyscloudtech.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-600 font-semibold hover:underline"
                  >
                    VISYS CLOUD TECHNOLOGIES
                  </a>{" "}
                  registered in both India and the US.
                </p>

                <p>
                  Cloud4coolkids streamlines learning by integrating a cloud-based
                  Linux server for writing, compiling, and practicing code.
                </p>
              </motion.div>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r
                             from-cyan-500 to-indigo-500
                             text-white font-semibold shadow-lg"
                >
                  Know More
                </motion.button>
              </motion.div>
            </div>

            {/* IMAGE (RIGHT) */}
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/free-vector/students-working-computer-room_1308-30865.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Students Learning"
              className="w-full max-w-md mx-auto rounded-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default KnowAboutUs;
