import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/ScrollToTop";

function AppRoutes({ toggleTheme, theme }) {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ✅ MOVE HERE */}

      <Routes>
        <Route element={<MainLayout toggleTheme={toggleTheme} theme={theme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;