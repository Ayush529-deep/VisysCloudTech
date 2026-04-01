import React from "react";
import missionImage from "../assets/vision.jpg"; // replace with your image path

const missionData = [
  {
    title: "Vision",
    description: "To create a future where technology serves as a catalyst for economic empowerment, education, and digital inclusivity.We strive to bridge the digital divide by making AI and cloud technologies accessible to all, fostering innovation and self-reliance.",
    icon: (
      <svg
        className="w-6 h-6 text-[#369CA8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Mission",
    description: "To empower local businesses through digital transformation, enhancing their online presence and market reach.To bridge the gender gap in AI and technology by providing women with the necessary skills and knowledge to succeed.",
    icon: (
      <svg
        className="w-6 h-6 text-[#369CA8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "Our Philosophy",
    description: "Innovation with Purpose – Technology should be a tool for empowerment, not just advancement.Inclusivity in Tech – We strive to make AI and cloud education accessible to all, regardless of background.",
    icon: (
      <svg
        className="w-6 h-6 text-[#369CA8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
      </svg>
    ),
  },
];

const Vision = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Vision / Mission / Goal */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          {missionData.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Circular Image */}
        <div className="flex justify-center md:justify-end">
  <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-[#369CA8]">
    <img
      src={missionImage}
      alt="Mission"
      className="w-full h-full object-cover"
    />
    {/* Optional accent circles */}
    <div className="absolute top-0 left-0 w-24 h-24 border-2 border-[#369CA8] rounded-full opacity-50 -translate-x-6 -translate-y-6"></div>
    <div className="absolute bottom-0 right-0 w-28 h-28 border-2 border-[#369CA8] rounded-full opacity-50 translate-x-6 translate-y-6"></div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Vision;
