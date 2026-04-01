import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import bgImage from "/src/assets/business.webp";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message Sent Successfully ✅");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message ❌");
      console.error(error);
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c1b2a]/85"></div>

      <div className="relative w-full max-w-6xl mx-auto mt-16 px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          </div>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="text-gray-300 text-sm">
                  8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070
                </p>
                <br />
                <p className="text-gray-300 text-sm">
                  QHub-Madhapur, 4th Floor, near madhapur metro station,
                  Madhapur, Hyderabad, Telangana 500033
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-300 text-sm">
                  +1 - 469-214-4477 <br /> +91 9392014678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-300 text-sm">
                  info@visyscloudtech.com
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your Message..."
                rows="4"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2 resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
            >
              Send
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;



































// import React, {useState} from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail } from "lucide-react";
// import bgImage from "/src/assets/business.webp"; // Add your background image
// import axios from "axios"

// const Contact = () => {
//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-[#0c1b2a]/85"></div>

//       <div className="relative w-full max-w-6xl mx-auto mt-16 px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white space-y-8"
//         >
//           <div>
//             <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
           
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 p-3 rounded-full">
//                 <MapPin size={20} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">Address</h4>
//                 <p className="text-gray-300 text-sm">
//                   8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070
//                 </p> <br/>
//                 <p className="text-gray-300 text-sm">
//                   QHub-Madhapur,4th Floor,near madhapur metro station, Madhapur, Hyderabad, Telangana 500033
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 p-3 rounded-full">
//                 <Phone size={20} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">Phone</h4>
//                 <p className="text-gray-300 text-sm">
//                   +1 - 469-214-4477, <br/> +91 9392014678
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="bg-white text-blue-600 p-3 rounded-full">
//                 <Mail size={20} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">Email</h4>
//                 <p className="text-gray-300 text-sm">
//                    info@visyscloudtech.com
//                 </p>
//               </div>
//             </div>

//           </div>
//         </motion.div>

//         {/* RIGHT SIDE FORM */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white rounded-lg shadow-2xl p-8"
//         >
//           <h3 className="text-2xl font-semibold mb-6 text-gray-800">
//             Send Message
//           </h3>

//           <form className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
//               />
//             </div>

//             <div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
//               />
//             </div>


//             <div>
//               <input
//                 type="Phone"
//                 placeholder="Phone"
//                 className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
//               />
//             </div>


//             <div>
//               <textarea
//                 placeholder="Type your Message..."
//                 rows="4"
//                 className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2 resize-none"
//               ></textarea>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
//             >
//               Send
//             </motion.button>
//           </form>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Contact;
