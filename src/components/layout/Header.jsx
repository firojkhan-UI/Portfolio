import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("added console log for theme in header.jsx", theme);

  return (
    <header className="sticky top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
          Feroz Developer
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;