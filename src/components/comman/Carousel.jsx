import { useState } from "react";
import CompanyCard from "./CompanyCard";

function Carousel({ companies }) {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the companies array for seamless infinite loop
  const tripleCompanies = [...companies, ...companies, ...companies];

  return (
    <div
      className="overflow-hidden w-full py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-6 w-max"
        style={{
          animation: "scroll 10s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {tripleCompanies.map((company, index) => (
          <CompanyCard key={`${company.id}-${index}`} company={company} />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
}

export default Carousel;
