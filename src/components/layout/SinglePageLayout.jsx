import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import Experience from "../../pages/Experience";
import useScrollSpy from "../../hooks/useScrollSpy";

const SECTION_IDS = ["home", "skills", "experience", "projects", "contact"];

const SinglePageLayout = ({ toggleTheme, theme }) => {
  const scrollContainerRef = useRef(null);
  const { scrollToSection, activeSection } = useScrollSpy(SECTION_IDS, scrollContainerRef);

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main>
        <section id="home" className="min-h-screen snap-start scroll-mt-12">
          <div className="container mx-auto px-4 py-6">
            <Home />
          </div>
        </section>

        <section id="skills" className="min-h-screen snap-start scroll-mt-12">
          <div className="container mx-auto px-4 py-6">
            <Skills />
          </div>
        </section>

        <section id="experience" className="min-h-screen snap-start scroll-mt-12">
          <div className="container mx-auto px-4 py-6">
            <Experience />
          </div>
        </section>

        <section id="projects" className="min-h-screen snap-start scroll-mt-12">
          <div className="container mx-auto px-4 py-6">
            <Projects />
          </div>
        </section>

        <section id="contact" className="min-h-screen snap-start scroll-mt-12">
          <div className="container mx-auto px-4 py-6">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePageLayout;
