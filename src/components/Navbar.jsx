import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa"; // Importing eye icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const resumeLink = "https://drive.google.com/file/d/1nA_X3fi6uHtFcQKusOXxzYMz8jfyeTd6/view?usp=drive_link";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-4 shadow-md z-10 overflow-x-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl md:text-6xl font-bold hover:text-amber-300 hover:border-b-4 hover:border-amber-500 transition duration-300">
          <Link to="/" onClick={closeSidebar}>Piyush Dobhal</Link>
        </span>

        {/* Resume Button (Icon for Desktop, Text for Mobile) */}
        <div className="relative flex items-center">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2 hover:text-amber-300 transition duration-300"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            {/* Desktop View (Icon) */}
            <span className="hidden md:inline text-2xl relative">
              <FaEye />
            </span>

            {/* Mobile View (Text) */}
            <span className="md:hidden text-lg font-semibold">View Resume</span>
          </a>

          {/* Popup */}
          {showPopup && (
            <div className="absolute top-full mt-2  left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-sm p-1 rounded shadow-lg z-20">
              RESUME
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleSidebar}>
          <motion.div
            className="flex flex-col space-y-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex space-x-4 md:space-x-6 font-semibold text-sm md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="hover:text-blue-900 transition duration-300" to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Sidebar for Mobile View */}
      <motion.div
        className={`fixed top-0 left-0 w-3/4 h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-4 shadow-md z-20 md:hidden transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-6 text-xl font-semibold">
          {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="hover:text-blue-900 transition duration-300" to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={closeSidebar}>
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
