import { Code, Settings, Layers, FlaskConical, Sparkles, Camera, Film, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import SkillCard from "../components/comman/SkillCard";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} />,
    skills: ["JavaScript", "TypeScript", "SQL", "PHP", "Python"],
  },
  {
    title: "JavaScript Libraries & Frameworks",
    icon: <Layers size={20} />,
    skills: ["Node.js", "React.js", "Next.js", "Vanilla JS"],
  },
  {
    title: "DevOps & Tools",
    icon: <Settings size={20} />,
    skills: ["Docker", "Git", "VIM", "Agile", "CI/CD with Jenkins"],
  },
  {
    title: "Testing",
    icon: <FlaskConical size={20} />,
    skills: ["Jest", "Cypress", "Pytest", "Mocha", "Supertest"],
  },
  {
    title: "AI Tools",
    icon: <Sparkles size={20} />,
    skills: ["GitHub Copilot", "ChatGPT", "Claude"],
  },
  {
    title: "Photography",
    icon: <Camera size={20} />,
    skills: ["Photography","Photo Editing","Composition & Lighting"],
  }
];

function Skills() {
  return (
    <section id="skills" className="min-h-[90vh] flex items-center bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 py-6 sm:py-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Skills
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto"
          >
            My technical skills and expertise across various technologies and tools.
          </motion.p>
        </motion.div>
        {/* Scrolling tech logos banner */}
        <motion.div
          variants={cardStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={scaleIn} transition={{ duration: 0.5 }}>
              <SkillCard
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
