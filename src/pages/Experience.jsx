import { motion } from "framer-motion";
import Carousel from "../components/comman/Carousel";

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

// Add your company images to the public folder or import them
const companies = [
  {
    id: 1,
    name: "Fractal Analytics",
    logo: "/images/fractal_analytics_logo.jpg",
    role: "Senior Developer",
    duration: "2023 - Present",
  },
  {
    id: 2,
    name: "Happay by MMT",
    logo: "/images/Happay_by_mmt_logo_v1.svg",
    role: "Full Stack Developer",
    duration: "2021 - 2023",
  },
  {
    id: 3,
    name: "Prosperr.io",
    logo: "/images/prosperr_io_logo.jpg",
    role: "Frontend Developer",
    duration: "2019 - 2021",
  },
  {
    id: 4,
    name: "Company Four",
    logo: "/images/download.png",
    role: "Junior Developer",
    duration: "2018 - 2019",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
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
            Professional Experience
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto"
          >
            Over 5 years of experience building scalable web applications and leading development teams in fast-paced environments.
          </motion.p>
        </motion.div>

        <div className="mt-12">
          <Carousel companies={companies} />
        </div>
      </div>
    </section>
  )
}

export default Experience
