import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of the project and the technologies used.",
    image: "/images/edtech.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of the project and the technologies used.",
    image: "/images/chatbot.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of the project and the technologies used.",
    image: "/images/aviation_img.jpg",
    technologies: ["React", "Redux", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12">
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
            Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto"
          >
            A collection of projects I've built showcasing my skills and experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
