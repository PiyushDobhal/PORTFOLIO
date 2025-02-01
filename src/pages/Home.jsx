import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { pageTransition } from "../App";
import dp from "../assets/dp.jpg";

const basePath =
  import.meta.env.VITE_REACT_APP_IS_GITHUB_PAGES === "true" ? "/PORTFOLIO" : "";

const Home = ({ data }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <motion.div
          className="p-10 flex flex-col md:flex-row gap-12 text-center min-h-fit pt-40 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-[70%]">
            <h1 className="text-4xl hover:text-amber-700/90 font-bold transition-all duration-300 transform hover:scale-105">
              Welcome to <br /> {data.name}'s Portfolio
            </h1>
            <p className="mt-4 text-lg text-amber-400 opacity-75 hover:opacity-100 transition-opacity duration-300">
              Front-End Developer | MERN Stack Enthusiast
            </p>

            {/* Logo - Hidden on Mobile */}
            <img
              src={`${basePath}/portfoliologo.webp`}
              alt="Portfolio Logo"
              className="hidden md:block mx-auto mt-6 w-32 h-32 rounded-full shadow-lg"
            />
          </div>

          <div className="w-full flex flex-col items-center gap-6">
            <motion.img
              src={dp}
              alt="Profile"
              className="object-contain border-7 border-emerald-500 h-72 rounded-4xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
              whileHover={{ scale: 1.1, rotate: 3 }}
            />

            {/* Profile Links */}
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", url: data.linkedin, icon: "🔗" },
                { name: "GitHub", url: data.github, icon: "💻" },
                { name: "Google Cloud", url: data.googleCloud, icon: "☁️" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-200 text-gray-600 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon} {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <hr />
        <About data={data} />
        <br />
        <hr />
        <Education data={data} />
        <br />
        <br />
        <hr />
        <Projects data={data} />
        <br />
        <br />
        <hr />
        <motion.div {...pageTransition}>
          <Contact data={data} />
        </motion.div>
        <br />
      </div>
    </>
  );
};

export default Home;
