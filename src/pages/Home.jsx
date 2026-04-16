import { Download, Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/comman/Button";
import StatusBadge from "../components/comman/StatusBadge";
import firoj_profile from "../assets/portfolio_profile.jpg";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
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

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-32 md:gap-60 lg:gap-96 items-start">
        {/* LEFT */}
        <motion.div
          className="order-2 md:order-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <StatusBadge
              text="Available for Work"
              icon={<Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />}
              dot
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight"
          >
            Hello, I'm <br />
            <motion.span
              className="text-gray-900 dark:text-white leading-tight inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Feroz Developer
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md"
          >
            Senior Software Engineer crafting digital <br className="hidden sm:block" />
            experiences with 5+ years of expertise
          </motion.p>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md"
          >
            Specializing in full-stack development, <br className="hidden sm:block" />
            DevOps practices, and scalable solutions
            that <br className="hidden sm:block" /> drive business growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3"
          >
            <motion.a
              href="/Firoj-Khan-Frontend-Developer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button icon={<Download className="w-3 h-3 sm:w-4 sm:h-4" />}>Download Resume</Button>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline">View My Work</Button>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-4 sm:mt-6 flex gap-2 sm:gap-3"
          >
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-1.5 sm:p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6 text-center md:text-left"
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "5+", label: "Years Exp" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative flex justify-center order-1 md:order-2 mb-4 sm:mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white dark:border-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={firoj_profile}
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <StatusBadge text="Available for hire" dot />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
