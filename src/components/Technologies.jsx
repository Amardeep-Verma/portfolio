import { BiLogoAdobe, BiLogoBootstrap, BiLogoCPlusPlus, BiLogoFacebook, BiLogoGit, BiLogoNetlify } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

// Different variants for each icon to float in various directions
const iconVariants = {
  initial: { x: 0, y: 0 },
  animate: (index) => ({
    x: [0, (Math.random() - 0.5) * 20, 0], // Random horizontal movement
    y: [0, (Math.random() - 0.5) * 20, 0], // Random vertical movement
    transition: {
      duration: 2 + index * 0.5, // Staggered duration for a nice effect
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-500", link: "https://reactjs.org/" },
          { Icon: TbBrandNextjs, color: "text-gray-700", link: "https://nextjs.org/" },
          { Icon: SiMongodb, color: "text-green-500", link: "https://www.mongodb.com/" },
          { Icon: DiRedis, color: "text-red-700", link: "https://redis.io/" },
          { Icon: FaNodeJs, color: "text-green-500", link: "https://nodejs.org/" },
          { Icon: BiLogoGit, color: "text-orange-600", link: "https://git-scm.com/" },
          { Icon: BiLogoCPlusPlus, color: "text-blue-600", link: "https://isocpp.org/" }, // Added link for C++
          { Icon: BiLogoAdobe, color: "text-red-600", link: "https://www.adobe.com/" }, // Added link for Adobe
          { Icon: BiLogoBootstrap, color: "text-purple-600", link: "https://getbootstrap.com/" }, // Updated color and added link for Bootstrap
          { Icon: BiLogoNetlify, color: "text-blue-400", link: "https://www.netlify.com/" } // Added link for Netlify
        ].map(({ Icon, color, link }, index) => (
          <motion.div
            key={index}
            className={`p-4`}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            custom={index}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}  
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon className={`text-7xl ${color}`} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
