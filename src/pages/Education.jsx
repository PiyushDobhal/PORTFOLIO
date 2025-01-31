import React from "react";
import { motion } from "framer-motion";

const Education = ({ data }) => {
  return (
    <div className="p-8 mt-20"> {/* Adjusted padding-top to account for navbar */}
      <motion.h1
        className="text-3xl font-bold mb-4 hover:text-gray-400 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        EDUCATION & CERTIFICATIONS
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold text-emerald-500 mt-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <br />
      <motion.ul
        className="list-disc ml-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {data.education.map((edu, index) => (
          <motion.li
            key={index}
            className="text-xl hover:text-emerald-400 transition-colors duration-300"
            whileHover={{ scale: 1.05, color: "#64bfa3" }}
          >
            <strong>{edu.degree}</strong> - {edu.school} ({edu.year}){" "}
            <strong className="text-pink-400">{edu.cgpa}</strong>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mt-6 text-emerald-500"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Certifications
      </motion.h2>
      <br />
      <motion.ul
        className="list-disc ml-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {data.certifications.certificate.map((cert, index) => (
          <motion.li
            key={index}
            className="text-xl hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05, color: "#ec4899" }}
          >
            {cert}
            {data.certifications.links[index] && (
              <a
                href={data.certifications.links[index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 ml-2"
              >
                ⏭️
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Education;
