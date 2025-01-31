import React from "react";
import { motion } from "framer-motion";

const Projects = ({ data }) => {
  return (
    <div className="p-8 mt-20">
      {/* Adjusted margin-top to account for navbar */}
      <a
        href="https://github.com/PiyushDobhal?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.h1
          className="text-3xl font-bold mb-4 hover:text-red-500 transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
      </a>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:scale-105 hover:shadow-xl transition-all duration-300"
            whileTap={{ scale: 0.98 }}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.2}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-800 shadow-xl"
              whileHover={{ scale: 1.1, color: "#FFD700" }}
            >
              {project.name}
            </motion.h2>
            <p className="mt-3 text-xl italic font-medium text-white">
              {project.description}
            </p>
            <p className="mt-2 text-orange-300 font-semibold">
              <span className="text-red-800">TOOLS:</span> {project.tools}
            </p>
            <motion.a
              href={project.url}
              className="text-blue-300 font-semibold text-end mt-4 block hover:text-blue-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#00BFFF" }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
