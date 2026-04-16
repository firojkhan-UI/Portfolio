import { useEffect, useRef } from "react";

export default function FollowEyes() {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      movePupil(e, leftPupilRef);
      movePupil(e, rightPupilRef);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const movePupil = (e, pupilRef) => {
    const rect = pupilRef.current.parentElement.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(
      e.clientY - eyeCenterY,
      e.clientX - eyeCenterX
    );

    const radius = 4; // how far pupil can move (smaller for header size)

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="w-8 h-8 bg-indigo-600 dark:bg-cyan-400 rounded-full flex flex-col items-center justify-center transition-colors duration-300">
      {/* Eyes Container */}
      <div className="flex items-center gap-1.5">
        {/* Left Eye */}
        <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
          <div
            ref={leftPupilRef}
            className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full transition-transform duration-75"
          ></div>
        </div>

        {/* Right Eye */}
        <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
          <div
            ref={rightPupilRef}
            className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full transition-transform duration-75"
          ></div>
        </div>
      </div>

      {/* Smile */}
      <div className="w-3.5 h-1.5 border-b-2 border-white dark:border-gray-900 rounded-b-full mt-0.5"></div>
    </div>
  );
}
