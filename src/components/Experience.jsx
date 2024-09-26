import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }} // Triggers when in view
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Triggers when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation for each experience
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} - {experience.company}
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {/* Technologies Mapping */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="mt-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      className="mr-2 mt-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
