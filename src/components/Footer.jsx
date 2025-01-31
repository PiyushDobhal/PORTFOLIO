import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-[#0c0c0c] to-[#1a1a1a] text-white p-6 text-center w-full mt-10 rounded-t-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4 text-lg sm:text-base">
          &copy; {new Date().getFullYear()} Piyush Dobhal. All rights reserved.
        </p>
        <p className="flex flex-wrap justify-center space-x-4 text-sm sm:text-base">
          <a
            href="http://www.linkedin.com/in/piyush-dobhal-b3a757309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300 mb-2 sm:mb-0"
          >
            LinkedIn
          </a>
          <span className="text-white">|</span>
          <a
            href="https://github.com/PiyushDobhal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300 mb-2 sm:mb-0"
          >
            GitHub
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
