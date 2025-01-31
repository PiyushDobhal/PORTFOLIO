import React from "react";
import { motion } from "framer-motion";

const About = ({ data }) => {
  return (
    <div className="p-5 mt-10 flex flex-col md:flex-row gap-10">
      <motion.div
        className="w-full md:w-[50%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold p-1 mb-4 text-amber-700 hover:text-white transition-colors duration-300">
          About Me
        </h1>
        {/* Adjusted text styles for better readability on mobile */}
        <p className="text-lg md:text-xl text-cyan-500 hover:text-blue-600 leading-relaxed font-semibold transition-colors duration-300">
          {data.profileSummary}
        </p>
      </motion.div>
      
      <motion.div
        className="w-full md:w-[45%] p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl text-red-300 hover:text-red-500 font-bold mb-4 transition-colors duration-300">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <strong className="text-green-400 text-lg">PROGRAMMING:</strong>
            <ul className="list-disc ml-7">
              {data.skills.programming.map((skill, index) => (
                <motion.li
                  key={index}
                  className="hover:text-violet-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, color: "#8a2be2" }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <strong className="text-green-400 text-lg">TOOLS:</strong>
            <ul className="list-disc ml-7">
              {data.skills.tools.map((tool, index) => (
                <motion.li
                  key={index}
                  className="hover:text-violet-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, color: "#8a2be2" }}
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
