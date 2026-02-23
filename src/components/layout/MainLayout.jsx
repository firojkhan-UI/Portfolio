import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MainLayout = ({ toggleTheme, theme }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      
      <ScrollToTop />

      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;