import React from "react";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  return (
    <div className="flex justify-center items-center min-h-screen pt-28 relative z-0"> {/* Adjusted z-index */}
      <motion.div
        className="bg-gray-300 p-10 rounded-lg shadow-sky-950 shadow-2xl w-full sm:w-[90%] md:w-[60%] lg:w-[40%] z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center hover:text-blue-600 transition duration-300">
          Contact Me
        </h1>

        {/* Contact Information */}
        <p className="text-xl mb-4 text-gray-700">
          <span className="font-semibold">Email:</span>{' '}
          <a href={`mailto:${data.email}`} className="text-blue-500 hover:text-blue-700 transition duration-300">
            {data.email}
          </a>
        </p>

        <p className="text-xl mb-4 text-gray-700">
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href={data.linkedin}
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </p>

        <p className="text-xl mb-4 text-gray-700">
          <span className="font-semibold">GitHub:</span>{' '}
          <a
            href={data.github}
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
