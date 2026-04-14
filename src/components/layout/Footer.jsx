function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Firoj Khan. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            className="hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-black dark:hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;