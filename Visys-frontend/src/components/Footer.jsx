import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-0 bg-[#142755] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <img
            src="/src/assets/logo.png"
            alt="Visys Logo"
            className="w-40 mb-6"
          />

          <h3 className="font-semibold text-lg mb-4">
            VISYS CLOUD TECHNOLOGIES
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Visys Cloud Technologies always aims at helping organizations gain a
            competitive edge by leveraging new technologies to drive innovation,
            manage scalability, and explore new markets.
          </p>
        </div>

        {/* Popular Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">
            POPULAR SECTIONS
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Our Works", path: "/company" },
              { name: "Services", path: "/services" },
              { name: "Reviews", path: "/industries" },
              { name: "Launched Products", path: "/products" },
              { name: "Careers", path: "/careers" },
              { name: "Internship", path: "/internship" },
              { name: "About Us", path: "/about" },
              { name: "Blogs", path: "/blogs" },
              { name: "Terms & Conditions", path: "/terms" },
              { name: "Help", path: "/help" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-[#369CA8] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">
            OUR SERVICES
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "UI/UX Design", path: "/services/ui-ux" },
              { name: "Web Development", path: "/services/web-development" },
              { name: "Deployment", path: "/services/deployment" },
              { name: "Internship Program", path: "/internship" },
              { name: "BPO", path: "/services/bpo" },
              { name: "Cloud Architect", path: "/services/cloud" },
              { name: "IT Support", path: "/services/it-support" },
              { name: "Artificial Intelligence", path: "/services/ai" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-[#369CA8] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">
            CONTACT
          </h3>

          <div className="space-y-5 text-gray-300 text-sm">

            <div>
              <p className="flex items-center gap-2 text-white font-medium">
                <MapPin size={16} className="text-[#369CA8]" />
                USA Location
              </p>
              <p className="mt-2">
                8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-white font-medium">
                <MapPin size={16} className="text-[#369CA8]" />
                India Location
              </p>
              <p className="mt-2">
                QHub-Madhapur, 4th Floor, near Madhapur metro station,
                Madhapur, Hyderabad, Telangana 500033
              </p>
            </div>

            <a
              href="tel:+14692144477"
              className="flex items-center gap-2 hover:text-[#369CA8] transition"
            >
              <Phone size={16} className="text-[#369CA8]" />
              +1 - 469-214-4477
            </a>

            <a
              href="tel:+919392014678"
              className="flex items-center gap-2 hover:text-[#369CA8] transition"
            >
              <Phone size={16} className="text-[#369CA8]" />
              +91 9392014678
            </a>

            <a
              href="mailto:info@visyscloudtech.com"
              className="flex items-center gap-2 hover:text-[#369CA8] transition"
            >
              <Mail size={16} className="text-[#369CA8]" />
              info@visyscloudtech.com
            </a>

            <a
              href="mailto:helpdesk@visyscloudtech.com"
              className="flex items-center gap-2 hover:text-[#369CA8] transition"
            >
              <Mail size={16} className="text-[#369CA8]" />
              helpdesk@visyscloudtech.com
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Visys Cloud Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


























// import React from "react";
// import { MapPin, Phone, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="mt-0 bg-[#142755] text-white pt-20 pb-10 border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

//         {/* Company Info */}
//         <div>
//           <img
//             src="/src/assets/logo.png"   // replace with your logo path
//             alt="Visys Logo"
//             className="w-40 mb-6"
//           />

//           <h3 className="font-semibold text-lg mb-4">
//             VISYS CLOUD TECHNOLOGIES
//           </h3>

//           <p className="text-gray-300 text-sm leading-relaxed">
//             Visys Cloud Technologies always aims at helping organizations gain a
//             competitive edge by leveraging new technologies to drive
//             innovation, manage scalability, and explore new markets.
//           </p>
//         </div>

//         {/* Popular Sections */}
//         <div>
//           <h3 className="text-lg font-semibold mb-6 text-white">
//             POPULAR SECTIONS
//           </h3>
//           <ul className="space-y-3 text-gray-300 text-sm">
//             {[
//               "Home",
//               "Our Works",
//               "Services",
//               "Reviews",
//               "Launched Products",
//               "Careers",
//               "Internship",
//               "About Us",
//               "Blogs",
//               "Terms & Conditions",
//               "Help",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="hover:text-[#369CA8] transition-colors duration-300 cursor-pointer"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Our Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-6 text-white">
//             OUR SERVICES
//           </h3>
//           <ul className="space-y-3 text-gray-300 text-sm">
//             {[
//               "UI/UX Design",
//               "Web Development",
//               "Deployment",
//               "Internship Program",
//               "BPO",
//               "Cloud Architect",
//               "IT Support",
//               "Artificial Intelligence",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="hover:text-[#369CA8] transition-colors duration-300 cursor-pointer"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-6 text-white">
//             CONTACT
//           </h3>

//           <div className="space-y-5 text-gray-300 text-sm">

//             <div>
//               <p className="flex items-center gap-2 text-white font-medium">
//                 <MapPin size={16} className="text-[#369CA8]" />
//                 USA Location
//               </p>
//               <p className="mt-2">
//                 8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070
//               </p>
//             </div>

//             <div>
//               <p className="flex items-center gap-2 text-white font-medium">
//                 <MapPin size={16} className="text-[#369CA8]" />
//                 India Location
//               </p>
//               <p className="mt-2">
//                 QHub-Madhapur, 4th Floor, near Madhapur metro station,
//                 Madhapur, Hyderabad, Telangana 500033
//               </p>
//             </div>

//             <p className="flex items-center gap-2 hover:text-[#369CA8] transition">
//               <Phone size={16} className="text-[#369CA8]" />
//               +1 - 469-214-4477
//             </p>

//             <p className="flex items-center gap-2 hover:text-[#369CA8] transition">
//               <Phone size={16} className="text-[#369CA8]" />
//               +91 9392014678
//             </p>

//             <p className="flex items-center gap-2 hover:text-[#369CA8] transition">
//               <Mail size={16} className="text-[#369CA8]" />
//               info@visyscloudtech.com
//             </p>

//             <p className="flex items-center gap-2 hover:text-[#369CA8] transition">
//               <Mail size={16} className="text-[#369CA8]" />
//               helpdesk@visyscloudtech.com
//             </p>

//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} Visys Cloud Technologies. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;













































