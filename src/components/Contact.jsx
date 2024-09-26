import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineMail, AiFillLinkedin, AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="my-10 text-center text-5xl font-bold tracking-wider"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-center tracking-tighter"
      >
        {/* Phone Section */}
        <p className="my-4 text-lg">
          <AiFillPhone className="inline-block mr-2 text-2xl text-green-400" />
          {CONTACT.address}
        </p>

        {/* LinkedIn with hover effects */}
        <motion.a
          href="https://www.linkedin.com/in/amardeep86/"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center my-4 text-lg hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <AiFillLinkedin className="mr-2 text-3xl text-blue-400 hover:rotate-12 transition-transform duration-300 ease-in-out" />
          LinkedIn {/* Static text instead of CONTACT.linkedin */}
        </motion.a>

        <br />

        {/* Email with hover effects */}
        <motion.div
          className="inline-flex items-center my-4 text-lg relative group" // added 'relative' and 'group' for hover state
        >
          <AiOutlineMail className="mr-2 text-3xl text-red-400 group-hover:rotate-12 transition-transform duration-300 ease-in-out" />
          
          {/* Hidden email text that slides in */}
          <motion.span
            initial={{ x: -100, opacity: 0 }} // Initially hidden and off-screen
            whileHover={{ x: 0, opacity: 2 }} // Slide in when hovered
            transition={{ duration: 2}} // Transition for the slide-in effect
            className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" // Positioned and hidden initially
          >
            {CONTACT.email} {/* This is your email */}
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
