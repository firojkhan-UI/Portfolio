import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import { useState, useEffect } from "react";
import FollowEyes from "../comman/FollowEyes";

const Header = ({ toggleTheme, theme, scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    const sectionId = link.sectionId || (link.path === "/" ? "home" : link.path.slice(1));
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const isActive = (link) => {
    const sectionId = link.sectionId || (link.path === "/" ? "home" : link.path.slice(1));
    return activeSection === sectionId;
  };

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? "bg-white/90 dark:bg-white/5 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm" 
        : "bg-transparent border-gray-300 dark:border-gray-700"
    }`}>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <h1 className="text-base sm:text-lg font-semibold text-black dark:text-white">
          Feroz Developer
        </h1>

        {/* Centered FollowEyes */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <FollowEyes />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <span
              key={link.path}
              onClick={() => handleNavClick(link)}
              className={`text-sm transition-all duration-300 cursor-pointer ${
                isActive(link)
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </span>
          ))}

          {/* Theme Toggle */}
          <span
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </span>
        </nav>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">
          <span
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </span>

          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3 transition-colors duration-300">
          {NAV_LINKS.map((link) => (
            <span
              key={link.path}
              onClick={() => handleNavClick(link)}
              className={`block text-sm py-1 transition-all duration-300 cursor-pointer ${
                isActive(link)
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;