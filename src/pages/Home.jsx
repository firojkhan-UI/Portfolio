import { Download, Github, Linkedin, Mail, Briefcase } from "lucide-react";
import Button from "../components/comman/Button";
import StatusBadge from "../components/comman/StatusBadge";
import firoj_profile from "../assets/portfolio_profile.jpg";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-2 py-2 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <StatusBadge
            text="Available for Work"
            icon={<Briefcase size={16} />}
          />

          <h1 className="mt-2 text-4xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Hello, I'm <br />
            <span className="text-gray-900 dark:text-white leading-tight0">
              Feroz Developer
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300">
            Senior Software Engineer crafting digital experiences with 5+ years
            of expertise
          </p>

          <p className="mt-4 text-gray-500 md:text-2x2 dark:text-gray-400 max-w-lg">
            Specializing in full-stack development, DevOps practices, and
            scalable solutions that drive business growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 ">
            <a
              href="/Firoj-Khan-Frontend-Developer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button icon={<Download size={18} />}>Download Resume</Button>
            </a>

            <Button variant="outline">View My Work</Button>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                50+
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Projects
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                5+
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Years Exp
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                100%
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img
              src={firoj_profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 right-6">
            <StatusBadge text="Available for hire" dot />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
