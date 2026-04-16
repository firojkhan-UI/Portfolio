import { motion } from "framer-motion";

const SkillCard = ({ title, skills, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 sm:p-5 hover:border-indigo-300 dark:hover:border-cyan-700 hover:shadow-md dark:hover:shadow-cyan-900/20 transition-all duration-300 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3">
        {icon && (
          <div className="w-8 h-8 bg-indigo-100 dark:bg-cyan-900/30 rounded-md flex items-center justify-center text-indigo-600 dark:text-cyan-400">
            {icon}
          </div>
        )}
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: true }}
            className="px-2.5 py-1 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-indigo-100 dark:hover:bg-cyan-900/30 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
