import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { resumeData } from "./Resumedata";


const isGitHubPages = window.location.hostname === 'piyushdobhal.github.io';


export const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const parallaxEffect = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true }
};

function App() {
  return (
    <Router basename={isGitHubPages ? '/PORTFOLIO' : '/'}>
      <motion.div {...fadeIn}>
        <Navbar />
      </motion.div>
      
      <Routes>
        <Route path="/" element={<motion.div {...pageTransition}><Home data={resumeData} /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><About data={resumeData} /></motion.div>} />
        <Route path="/projects" element={<motion.div {...pageTransition} {...parallaxEffect}><Projects data={resumeData} /></motion.div>} />
        <Route path="/education" element={<motion.div {...pageTransition}><Education data={resumeData} /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageTransition} ><Contact data={resumeData} /></motion.div>} />
      </Routes>
      
      <motion.div {...fadeIn}>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
