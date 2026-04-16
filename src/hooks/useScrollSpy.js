import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useScrollSpy = (sectionIds, containerRef = null) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const activeSectionRef = useRef("home");

  // Scroll to a specific section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isScrollingRef.current = true;
      setActiveSection(sectionId);
      activeSectionRef.current = sectionId;
      
      // Update URL immediately when clicking
      const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
      navigate(newPath, { replace: true });
      
      element.scrollIntoView({ behavior: "smooth" });
      
      // Reset the scrolling flag after animation completes
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  }, [navigate]);

  // Handle initial route on mount - scroll to section based on URL
  useEffect(() => {
    const path = location.pathname;
    const sectionId = path === "/" ? "home" : path.slice(1);
    setActiveSection(sectionId);
    activeSectionRef.current = sectionId;
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Only on mount

  // Scroll event listener to track active section
  useEffect(() => {
    const scrollContainer = containerRef?.current || window;
    
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      // Account for header height (64px = h-16)
      const headerOffset = 64;
      const scrollPosition = containerRef?.current 
        ? containerRef.current.scrollTop + headerOffset + 100
        : window.scrollY + headerOffset + 100;
      
      let currentSection = sectionIds[0];
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }

      if (currentSection !== activeSectionRef.current) {
        activeSectionRef.current = currentSection;
        setActiveSection(currentSection);
        const newPath = currentSection === "home" ? "/" : `/${currentSection}`;
        navigate(newPath, { replace: true });
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [sectionIds, navigate, containerRef]);

  return { scrollToSection, activeSection };
};

export default useScrollSpy;
