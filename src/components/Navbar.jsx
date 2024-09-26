import { FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} />
        </a>
      </div>

      {/* Animated Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"> {/* Adjust gap here */}
        
        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/amardeep86/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.2, rotate: 15 }} // Animation on hover
          whileTap={{ scale: 0.9 }} // Animation on tap (for mobile)
          transition={{ type: "spring", stiffness: 300 }} // Springy effect
        >
          <FaLinkedin />
        </motion.a>

        {/* Github Icon */}
        <motion.a
          href="https://github.com/Amardeep-Verma"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>

        {/* Instagram Icon */}
        <motion.a
          href="https://www.instagram.com/amar_x_vr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaInstagram />
        </motion.a>

        {/* StackOverflow Icon */}
        <motion.a
          href="https://stackoverflow.com/users/22313306/amardeep"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="StackOverflow"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaStackOverflow />
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
