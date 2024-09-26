import profilePic from "../assets/img.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// List of different font families
const fonts = [
  "Arial",
  "Georgia",
  "Courier New",
  "Verdana",
  "Times New Roman",
  "Comic Sans MS",
  "Trebuchet MS",
  
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: {
    scale: 0.95,
  },
};

const Hero = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [currentTitleFontIndex, setCurrentTitleFontIndex] = useState(0);

  useEffect(() => {
    // Change the font every 200 milliseconds for both name and title
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
      setCurrentTitleFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 400);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src="src/assets/img.webp"
              alt="Amardeep"
              className="border border-stone-900 rounded-3xl"
              width={400}
              height={400}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            {/* Welcome message */}
            <motion.span
              variants={childVariants}
              className="text-3xl tracking-tight"
            >
              Hey! Welcome, it's{" "}
            </motion.span>

            {/* Animated name with changing font effect */}
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              style={{ fontFamily: fonts[currentFontIndex] }} // Apply the current font for the name
            >
              Amardeep
            </motion.h2>

            {/* Animated title with changing font effect */}
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              style={{ fontFamily: fonts[currentTitleFontIndex] }} // Apply the current font for the title
            >
              Full Stack Developer 
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              variants={childVariants}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-lg transition-all duration-300 ease-in-out hover:bg-stone-800 hover:text-white"
              whileHover="hover"
              whileTap="tap"
              variants1={buttonVariants}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
